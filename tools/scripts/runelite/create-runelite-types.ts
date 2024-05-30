/* eslint-disable unicorn/filename-case */
/* eslint-disable no-useless-escape */
/* eslint-disable unicorn/better-regex */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import fs from 'node:fs';
import path from 'node:path';
import { convertJava } from './convert-java';

function createDTSFiles(dirPath: any) {
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		for (const file of files) {
			if (file.isFile() && path.extname(file.name) === '.java') {
				const filePath = path.join(dirPath, file.name);
				fs.readFile(filePath, 'utf8', (err, data) => {
					if (err) {
						console.error('Error reading file:', err);
						return;
					}

					if (file.name !== 'Text.java') {
						// TEMP SKIP ALL BUT ONE
						return;
					}
					const tsInterface = convertJava(data, filePath);
					writeToFile(filePath, dirPath, tsInterface);
				});
			} else if (file.isDirectory()) {
				createDTSFiles(path.join(dirPath, file.name));
			}
		}
	});
}

function writeToFile(filePath: any, dirPath: any, tsContent: any) {
	if (tsContent) {
		const tsFileName = path.basename(filePath, '.java') + '.d.ts';
		const tsFilePath = path.join(dirPath, tsFileName);
		fs.writeFile(tsFilePath, tsContent, (err) => {
			if (err) {
				console.error('Error writing file:', err);
			} else {
				// console.log(`Created: ${tsFilePath}`);
				// Optionally delete the Java file after conversion
				// fs.unlink(filePath, (err) => {
				// 	if (err) {
				// 		console.error('Error deleting file:', err);
				// 	} else {
				// 		// console.log(`Deleted: ${filePath}`);
				// 	}
				// });
			}
		});
	}
}

// Usage
createDTSFiles('types/runelite/api');
createDTSFiles('types/runelite/client');
