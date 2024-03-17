import fs from 'fs';
import path from 'path';
function convertJavaEnumToTypeScriptInterfaceWithComments(javaCode) {
	const enumNameMatch = javaCode.match(/enum\s+(\w+)/);
	if (!enumNameMatch) {
		return 'Enum name not found.';
	}

	const enumName = enumNameMatch[1];
	let output = `interface ${enumName} {\n`;

	// Adjusting the regular expression to match enum entries, block comments, and single-line comments, stopping at semicolon.
	const regex =
		/\/\*\*[\s\S]+?\*\/|\/\/[^\n]*|(\w+)\s*(?:\([^)]*\))?,?\s*(?:\/\/.*)?\s*(?:;|\n)?/g;
	let match;
	let pendingComment = '';

	// Starting matching from the point immediately after the enum name is found.
	let startIndex = enumNameMatch.index + enumNameMatch[0].length;

	while ((match = regex.exec(javaCode.slice(startIndex))) !== null) {
		if (
			match[0].trim().startsWith('/**') ||
			match[0].trim().startsWith('//')
		) {
			// Found a comment, append it to pending comment.
			pendingComment +=
				'  ' + match[0].replace(/\n\s*\*/g, '\n  *').trim() + '\n';
		} else if (match[1]) {
			// Found an enum entry, attach any pending comment.
			output += `${pendingComment}  ${match[1]}: '${match[1]}';\n`;
			pendingComment = ''; // Reset pending comment.
			if (match[0].trim().includes(';')) {
				// Semicolon encountered, indicating the end of enum entries, stop matching.
				break;
			}
		}
	}

	output += '}';
	return output;
}

function createDTSFilesWithEnums(dirPath) {
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach((file) => {
			if (file.isFile() && path.extname(file.name) === '.java') {
				const filePath = path.join(dirPath, file.name);
				fs.readFile(filePath, 'utf8', (err, data) => {
					if (err) {
						console.error('Error reading file:', err);
						return;
					}

					const javaEnums = data.match(
						/public\s+enum\s+\w+\s+\{[^}]*\}/g,
					);
					if (!javaEnums) return;

					javaEnums.forEach((javaEnum) => {
						const jsInterface =
							convertJavaEnumToTypeScriptInterfaceWithComments(
								javaEnum,
							);
						if (jsInterface) {
							const enumFileName =
								path.basename(filePath, '.java') + '.d.ts';
							const enumFilePath = path.join(
								dirPath,
								enumFileName,
							);
							fs.writeFile(enumFilePath, jsInterface, (err) => {
								if (err) {
									console.error('Error writing file:', err);
								} else {
									console.log(`Created: ${enumFilePath}`);
									// Delete the Java file after successful conversion
									fs.unlink(filePath, (err) => {
										if (err) {
											console.error(
												'Error deleting file:',
												err,
											);
										} else {
											console.log(`Deleted: ${filePath}`);
										}
									});
								}
							});
						}
					});
				});
			} else if (file.isDirectory()) {
				createDTSFilesWithEnums(path.join(dirPath, file.name));
			}
		});
	});
}

// Usage
createDTSFilesWithEnums('api');
