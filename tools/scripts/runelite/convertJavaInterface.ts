/* eslint-disable unicorn/switch-case-braces */
export function convertJavaInterfaceToTypeScriptInterface(
	input: string,
): string {
	// Split the input into lines for easier processing
	const lines = input.split('\n');
	const customTypes = new Set<string>();

	// Process each line
	let begin = false;
	let isNextNullable = false;
	let capturingCommentBlock = false;
	let accumulatingMethodSignature = false;
	let methodSignature = '';
	const convertedLines = lines.map((line) => {
		// Comments
		if (!begin && line.trim().startsWith('/**')) {
			capturingCommentBlock = true;
			return line;
		} else if (!begin && capturingCommentBlock) {
			if (line.trim().endsWith('*/')) {
				capturingCommentBlock = false;
			}
			return line;
		} else if (line.trim().startsWith('*')) {
			return line;
		}

		// Start
		if (line.includes(' extends ')) {
			const regex =
				/(?:interface|class)\s+\w+\s+extends\s+([A-Za-z0-9_,\s]+)/;
			const match = line.match(regex);

			if (match && match[1]) {
				const allTypes = match[1].split(/\s*,\s*/);
				allTypes.forEach((type) => customTypes.add(type));
			}
		}

		if (!begin) {
			if (line.includes('public interface')) {
				begin = true;
				return line.replace(/public\s+interface/, 'interface');
			}
			return '';
		}

		// Handle annotations
		if (line.trim().startsWith('@Nullable')) {
			isNextNullable = true;
			return '';
		} else if (line.trim().startsWith('@')) {
			// FIXME: Client.java has a method that starts with an annotation
			// @MagicConstant(valuesFromClass = HintArrowType.class) int getHintArrowType();
			return '';
		}

		// Handle Methods
		if (
			!accumulatingMethodSignature &&
			(line.includes('(') || methodSignature)
		) {
			accumulatingMethodSignature = true;
			methodSignature = '';
		}

		if (accumulatingMethodSignature) {
			methodSignature += line + ' ';
			// Check if this line ends the method signature
			if (line.trim().endsWith(');')) {
				accumulatingMethodSignature = false;
				line = methodSignature;
				methodSignature = '';

				// Remove Annotations
				if (line.includes('@')) {
					line = line.replaceAll(/@\w+\s*(\([^)]*\))?/g, '');
				}

				const convertedLine = convertMethodSignature(
					line,
					isNextNullable,
					customTypes,
				);
				isNextNullable = false;
				return convertedLine;
			} else {
				// Continue accumulating if the method signature isn't complete
				return '';
			}
		}

		// Remove unnecessary braces and semicolons
		// line = line.replace(/[{;}]/g, '');

		return line;
	});

	const referencePaths = Array.from(customTypes).map(
		(type) => `/// <reference path="${type}.d.ts" />`,
	);
	return referencePaths.concat(convertedLines).join('\n');
}

function convertMethodSignature(
	signature: string,
	isNextNullable = false,
	customTypes: Set<string>,
) {
	// Extracting the return type and the rest of the signature
	const returnTypeMatch = signature.match(/^\s*([\w<>\[\]]+)\s+/);
	if (!returnTypeMatch) {
		return signature; // Return original if it's not a valid method signature
	}

	const returnType = returnTypeMatch[1];
	const restOfSignature = signature.substring(returnTypeMatch[0].length);

	// Extracting method name and parameters
	const methodMatch = restOfSignature.match(/(\w+)\s*\(([^)]*)\)/);
	if (!methodMatch) {
		return signature; // Return original if no method name and parameters found
	}

	const methodName = methodMatch[1];
	const parameters = methodMatch[2]
		.split(',')
		.map((parameter) => {
			const parts = parameter.trim().split(/\s+/);
			return parts.length > 1
				? `${parts[1].trim()}: ${convertType(parts[0].trim(), false, customTypes)}`
				: parameter;
		})
		.join(', ');

	return `\t${methodName}(${parameters}): ${convertType(returnType, isNextNullable, customTypes)};`;
}

function convertType(
	javaType: string,
	isNullable = false,
	customTypes: Set<string>,
): string {
	let arrayDepth = 0;
	while (javaType.endsWith('[]')) {
		arrayDepth++;
		javaType = javaType.slice(0, -2);
	}

	let baseType = javaType;
	switch (baseType) {
		case 'int':
		case 'float':
		case 'double':
		case 'long':
		case 'byte':
		case 'short':
			baseType = 'number';
			break;
		case 'String':
			baseType = 'string';
			break;
		case 'boolean':
			baseType = 'boolean';
			break;
		case 'Object':
		case 'Object...':
		case 'void':
			break;
		default:
			if (baseType.includes('<')) {
				const outerType = baseType
					.substring(0, baseType.indexOf('<'))
					.trim();
				const innerType = baseType
					.substring(
						baseType.indexOf('<') + 1,
						baseType.lastIndexOf('>'),
					)
					.trim();
				customTypes.add(outerType);
				customTypes.add(innerType);
			} else {
				customTypes.add(baseType);
			}
			break;
	}

	let tsType = baseType;
	for (let index = 0; index < arrayDepth; index++) {
		tsType += '[]';
	}

	return isNullable ? `${tsType} | null` : tsType;
}
