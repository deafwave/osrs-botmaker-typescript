/* eslint-disable unicorn/switch-case-braces */
export function convertMethodSignature(
	signature: string,
	isNextNullable = false,
	customTypes: Set<string>,
	isNextStatic = false,
	isNextPrivate = false,
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

	return `\t${isNextPrivate ? 'private ' : ''}${isNextStatic ? 'static ' : ''}${methodName}(${parameters}): ${convertType(returnType, isNextNullable, customTypes)};`;
}

export function convertType(
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
