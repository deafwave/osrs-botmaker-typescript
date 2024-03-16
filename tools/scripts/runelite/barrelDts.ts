import fs from 'fs-extra';
import path from 'node:path';

async function barrelDtsFiles(dirPath, interfaceName) {
	const files = await fs.readdir(dirPath);
	const declarations = [];
	const interfaceParts = [];

	for (const file of files) {
		const fullPath = path.join(dirPath, file);
		const stats = await fs.stat(fullPath);

		if (stats.isDirectory()) {
			const innerFiles = await fs.readdir(fullPath);

			let subInterfaceParts = [];
			innerFiles.forEach((innerFile) => {
				if (innerFile.endsWith('.d.ts')) {
					const typeName = path.basename(innerFile, '.d.ts');
					declarations.push(
						`/// <reference path="./${file}/${innerFile}" />`,
					);
					subInterfaceParts.push(`${typeName}: ${typeName}`);
				}
			});

			if (subInterfaceParts.length > 0) {
				interfaceParts.push(
					`${file}: { ${subInterfaceParts.join(', ')} }`,
				);
			}
		} else if (file.endsWith('.d.ts')) {
			const typeName = path.basename(file, '.d.ts');
			declarations.push(`/// <reference path="./${file}" />`);
			interfaceParts.push(`${typeName}: ${typeName}`);
		}
	}

	const output = [
		...declarations,
		`declare interface ${interfaceName} {`,
		`  ${interfaceParts.join(',\n  ')}`,
		`}`,
	].join('\n');

	const outputFile = path.join(dirPath, 'index.d.ts');
	await fs.writeFile(outputFile, output);
	console.log(`Barrel file created at: ${outputFile}`);
}

// Usage example
barrelDtsFiles('runeliteApi', 'RuneliteApi');
