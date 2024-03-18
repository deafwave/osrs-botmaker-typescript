import fs from 'node:fs';
import path from 'node:path';

const apiDirectory = './api'; // Path to the 'api' folder

// Function to convert a string to PascalCase
function toPascalCase(str) {
	return str
		.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
		.replace(/\s/g, '');
}

// Function to process a file
function processFile(filePath) {
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		let result = data;
		result = result.replaceAll(/private readonly (.*?):/g, (match, p1) => {
			return `get${toPascalCase(p1)}():`;
		}) as string;

		result = result.replaceAll(/private (.*?):(.*?);/g, (match, p1, p2) => {
			return `get${toPascalCase(p1)}(): ${p2};\nset${toPascalCase(p1)}(): ${p2};\n`;
		}) as string;

		fs.writeFile(filePath, result, 'utf8', (err) => {
			if (err) console.error(err);
		});
	});
}

// Function to recursively read directory
function readDirectory(directory) {
	fs.readdir(directory, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error(err);
			return;
		}

		files.forEach((file) => {
			const fullPath = path.join(directory, file.name);
			if (file.isDirectory()) {
				readDirectory(fullPath);
			} else if (file.name.includes('.d.ts')) {
				processFile(fullPath);
			}
		});
	});
}

// Start processing
readDirectory(apiDirectory);
