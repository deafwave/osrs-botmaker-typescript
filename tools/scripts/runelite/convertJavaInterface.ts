/* eslint-disable unicorn/switch-case-braces */
export function convertJavaInterfaceToTypeScriptInterface(
	input: string,
): string {
	// Split the input into lines for easier processing
	const lines = input.split('\n');

	// Process each line
	let begin = false;
	let isNextNullable = false;
	let capturingCommentBlock = false;
	const convertedLines = lines.map((line) => {
		if (!begin && line.trim().startsWith('/**')) {
			capturingCommentBlock = true;
			return line;
		}
		if (!begin && capturingCommentBlock) {
			if (line.trim().endsWith('*/')) {
				capturingCommentBlock = false;
			}
			return line;
		}
		if (!begin) {
			if (line.includes('public interface')) {
				begin = true;
				return line.replace(/public\s+interface/, 'interface');
			}
			return '';
		}

		// Handle annotations
		if (line.includes('@Nullable')) {
			isNextNullable = true;
			return '';
		} else if (line.trim().startsWith('@')) {
			return '';
		}

		// Handle Methods
		if (line.endsWith(');')) {
			line = convertMethodSignature(line, isNextNullable);
			isNextNullable = false;
			return line;
		}

		// Remove unnecessary braces and semicolons
		// line = line.replace(/[{;}]/g, '');

		return line;
	});

	// Join the processed lines back into a single string
	return convertedLines.join('\n');
}

function convertMethodSignature(signature: string, isNextNullable = false) {
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
	const params = methodMatch[2]
		.split(',')
		.map((param) => {
			const parts = param.trim().split(/\s+/);
			return parts.length > 1
				? `${parts[1].trim()}: ${convertType(parts[0].trim())}`
				: param;
		})
		.join(', ');

	// Constructing the new signature
	let newSignature = `\t${methodName}(${params}): ${convertType(returnType, isNextNullable)};`;

	return newSignature;
}

function convertType(javaType: string, isNullable = false): string {
	const isArray = javaType.endsWith('[]');
	let baseType = isArray ? javaType.slice(0, -2) : javaType;

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
		// Additional type mappings can be added here
	}

	const tsType = isArray ? `${baseType}[]` : baseType;
	return isNullable ? `${tsType} | null` : tsType;
}
