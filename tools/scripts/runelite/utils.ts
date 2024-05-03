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
	const returnTypeMatch = signature.match(/^\s*([\w<>, \[\]]+)\s+/);
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

			if (parts.length > 1) {
				let typedParameter = '';
				/** Handle reserved words */
				let cleanVariableName = parts[1].trim();
				if (cleanVariableName === 'var') {
					cleanVariableName = 'variable';
				}

				typedParameter = `${cleanVariableName}`;

				const convertedType = convertType(
					parts[0].trim(),
					false,
					customTypes,
				);

				typedParameter = `${typedParameter}: ${convertedType}`;

				// Force Array Ending in TypeScript
				if (cleanVariableName.startsWith('...')) {
					typedParameter = `${typedParameter}[]`;
				}

				return typedParameter;
			} else {
				return parameter;
			}
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
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		return `net.runelite.api.${runeliteType.replaceAll('/', '.')}`;
	} else {
		return;
	}
};

const baseTypeReplacements = (baseType: string, customTypes: Set<string>) => {
	baseType = baseType.replace('void', 'void');
	baseType = baseType.replace('String', 'string');
	baseType = baseType.replace('short', 'number');
	baseType = baseType.replace('Object', 'Record<string, any>');
	baseType = baseType.replace('Object...', 'any[]'); // FIXME: ...args: any[]
	baseType = baseType.replace('long', 'number');
	baseType = baseType.replace('Integer', 'number');
	baseType = baseType.replace('int', 'number');
	baseType = baseType.replace('float', 'number');
	baseType = baseType.replace('double', 'number');
	baseType = baseType.replace('byte', 'number');

	const runeliteType = handleRuneliteType(baseType, customTypes);
	if (runeliteType) {
		baseType = runeliteType;
	}
	return baseType;
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
		case 'Integer':
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
		case 'Object':
			baseType = 'Record<string, any>';
			break;
		case 'Object...':
			baseType = 'any[]'; // FIXME: ...args: any[]
			break;
		case 'boolean':
		case 'void':
			break;
		default:
			if (baseType.includes('<')) {
				// console.log(baseType);
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
					innerType = baseTypeReplacements(innerType, customTypes);
					baseType = `Array<${baseTypeReplacements(innerType, customTypes)}>`;
				} else if (outerType === 'Map') {
					const splitType = innerType.split(', ');
					innerType = baseTypeReplacements(splitType[1], customTypes);
					baseType = `Record<${baseTypeReplacements(splitType[0], customTypes)}, ${innerType}>`;
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
