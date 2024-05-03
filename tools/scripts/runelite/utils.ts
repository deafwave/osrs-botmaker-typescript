/* eslint-disable no-useless-escape */
/* eslint-disable unicorn/better-regex */
/* eslint-disable unicorn/prefer-string-slice */
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

const handleRuneliteType = (baseType: string, customTypes: Set<string>) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const runeliteType = [...customTypes].find((type) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		type.endsWith(`/${baseType}`),
	);

	// eslint-disable-next-line unicorn/prefer-ternary
	if (runeliteType) {
		console.log(runeliteType);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		return `net.runelite.api.${runeliteType.replaceAll('/', '.')}`;
	} else {
		return;
	}
};

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
				let innerType = baseType
					.substring(
						baseType.indexOf('<') + 1,
						baseType.lastIndexOf('>'),
					)
					.trim();

				const runeliteType = handleRuneliteType(innerType, customTypes);
				if (runeliteType) {
					innerType = runeliteType;
				}
				if (outerType === 'List') {
					baseType = `Array<${innerType}>`;
				} else {
					customTypes.add(outerType);
				}

				if (!runeliteType) {
					customTypes.add(innerType);
				}
			} else {
				const runeliteType = handleRuneliteType(baseType, customTypes);
				if (runeliteType) {
					baseType = runeliteType;
				} else {
					customTypes.add(baseType);
				}
			}
			break;
	}

	let tsType = baseType;
	for (let index = 0; index < arrayDepth; index++) {
		tsType += '[]';
	}

	return isNullable ? `${tsType} | null` : tsType;
}
