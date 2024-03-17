import fs from 'fs';
import path from 'path';
import { convertJavaEnumToTypeScriptInterfaceWithComments } from './convertJavaEnum';
import { convertJavaInterfaceToTypeScriptInterface } from './convertJavaInterface';
import { convertJavaClass } from './convertJavaClass';

function createDTSFiles(dirPath) {
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach((file) => {
			if (file.isFile() && path.extname(file.name) === '.java') {
				const filePath = path.join(dirPath, file.name);

				// Debuggin
				if (filePath !== 'api\\coords\\LocalPoint.java') return;

				fs.readFile(filePath, 'utf8', (err, data) => {
					if (err) {
						console.error('Error reading file:', err);
						return;
					}

					// Handle enums
					// const javaEnums = data.match(
					// 	/public\s+enum\s+\w+\s+{[^}]*}/g,
					// );
					// if (javaEnums) {
					// 	javaEnums.forEach((javaEnum) => {
					// 		const tsInterface =
					// 			convertJavaEnumToTypeScriptInterfaceWithComments(
					// 				javaEnum,
					// 			);
					// 		writeToFile(filePath, dirPath, tsInterface);
					// 	});
					// }

					// // Handle interfaces
					// const javaInterfaces = data.match(
					// 	/(?:\/\*\*[\S\s]*?\*\/\s*)?public\s+interface\s+\w+(\s+extends\s+[\w ,<>]+)?\s*{(?:[^}]*\/\*[\S\s]*?\*\/\s*)*[^}]*}/g,
					// );
					// if (javaInterfaces) {
					// 	javaInterfaces.forEach((javaInterface) => {
					// 		const tsInterface =
					// 			convertJavaInterfaceToTypeScriptInterface(
					// 				javaInterface,
					// 			);
					// 		writeToFile(filePath, dirPath, tsInterface);
					// 	});
					// }

					const javaClasses = data.match(
						/(?:\/\*\*[\S\s]*?\*\/\s*)?public\s+class\s+\w+(\s+implements\s+[\w ,<>]+)?\s*{(?:[^}]*\/\*[\S\s]*?\*\/\s*)*[^}]*}/g,
					);
					if (javaClasses) {
						for (const javaClass of javaClasses) {
							const tsInterface = convertJavaClass(javaClass);
							writeToFile(filePath, dirPath, tsInterface);
						}
					}
				});
			} else if (file.isDirectory()) {
				createDTSFiles(path.join(dirPath, file.name));
			}
		});
	});
}

function writeToFile(filePath, dirPath, tsContent) {
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
createDTSFiles('api');
