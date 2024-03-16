import fs from 'fs';
import path from 'path';

// Allows placeholder files to be created for the .d.ts files
// TODO: Once we're stable, make this properly generate the types
function createDTSFilesWithTypes(dirPath) {
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach((file) => {
			if (file.isDirectory()) {
				// Recursively handle directories
				createDTSFilesWithTypes(path.join(dirPath, file.name));
			} else {
				// Check if the file is a Java file
				if (path.extname(file.name) === '.java') {
					const baseFileName = path.basename(file.name, '.java');
					const typeName = baseFileName;
					const dtsFileName = baseFileName + '.d.ts';
					const dtsFilePath = path.join(dirPath, dtsFileName);
					const typeContent = `type ${typeName} = any;\n`;

					// Create a corresponding .d.ts file with the type declaration
					fs.writeFile(dtsFilePath, typeContent, (err) => {
						if (err) {
							console.error('Error writing file:', err);
						} else {
							console.log(`Created: ${dtsFilePath}`);
						}
					});
				}
			}
		});
	});
}

function prependToJavaFiles(dirPath, textToPrepend) {
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach((file) => {
			if (file.isDirectory()) {
				// Recursively handle directories
				prependToJavaFiles(
					path.join(dirPath, file.name),
					textToPrepend,
				);
			} else {
				if (path.extname(file.name) === '.java') {
					const filePath = path.join(dirPath, file.name);
					fs.readFile(filePath, 'utf8', (err, data) => {
						if (err) {
							console.error('Error reading file:', err);
							return;
						}
						const updatedContent = textToPrepend + data;
						fs.writeFile(
							filePath,
							updatedContent,
							'utf8',
							(err) => {
								if (err) {
									console.error('Error writing file:', err);
								}
							},
						);
					});
				}
			}
		});
	});
}

// Usage
const textToPrepend =
	'Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:\n';
prependToJavaFiles('runeliteJava', textToPrepend);

// Usage
// createDTSFilesWithTypes('runeliteJava');
