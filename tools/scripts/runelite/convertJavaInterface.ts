export function convertJavaInterfaceToTypeScriptInterface(javaInterface) {
	const interfaceNameMatch = javaInterface.match(/interface\s+(\w+)/);
	if (!interfaceNameMatch) {
		return 'Interface name not found.';
	}

	const interfaceName = interfaceNameMatch[1];
	let output = '';

	// Extract interface-level comment, if present
	const commentMatch = javaInterface.match(/\/\*\*[\s\S]+?\*\/\s*(?=public)/);
	if (commentMatch) {
		output += `${commentMatch[0].trim()}\n`;
	}

	output += `interface ${interfaceName} {\n`;

	// Regex to match method signatures
	const regex = /(\w+(?:\[\])?)\s+(\w+)\(([^)]*)\);/g;
	let match;

	while ((match = regex.exec(javaInterface)) !== null) {
		const returnType = convertType(match[1]);
		const methodName = match[2];
		const params = match[3]
			? match[3]
					.split(',')
					.map((param) => {
						const [type, name] = param.trim().split(/\s+/);
						return `${name}: ${convertType(type)}`;
					})
					.join(', ')
			: '';

		output += `    ${methodName}(${params}): ${returnType};\n`;
	}

	output += '}';
	return output;
}

function convertType(javaType) {
	const isArray = javaType.endsWith('[]');
	let baseType = isArray ? javaType.slice(0, -2) : javaType;

	switch (baseType) {
		case 'int':
		case 'float':
		case 'double':
		case 'long':
			baseType = 'number';
			break;
		case 'boolean':
			baseType = 'boolean';
			break;
		// Add more type mappings as needed
	}

	return isArray ? `${baseType}[]` : baseType;
}
