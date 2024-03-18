import * as fs from 'fs';
import * as path from 'path';

function processDirectory(dir: string) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stats = fs.statSync(fullPath);

		if (stats.isDirectory()) {
			processDirectory(fullPath);
		} else if (stats.isFile() && fullPath.endsWith('.d.ts')) {
			processFile(fullPath);
		}
	}
}

function processFile(filePath: string) {
	let content = fs.readFileSync(filePath, { encoding: 'utf8' });
	const lines = content.split('\n');

	if (!content.includes('declare namespace')) {
		const convertedFolderPath = filePath
			.replace(/\\/g, '/') // Convert backslashes to forward slashes for Windows paths
			.replace('.d.ts', '') // Remove the file extension
			.split('/') // Split by slashes
			.slice(0, -1) // Remove the file name
			.join('.'); // Join as dot-separated namespace

		const namespaceLine = `declare namespace net.runelite.${convertedFolderPath} {\n`;
		const closingBrace = '\n}';

		let newContent = '';
		let appendNamespace = true;

		for (const line of lines) {
			if (line.startsWith('///')) {
				newContent += line + '\n';
			} else {
				if (appendNamespace) {
					newContent += namespaceLine;
					appendNamespace = false;
				}
				newContent += line + '\n';
			}
		}

		newContent += closingBrace;
		fs.writeFileSync(filePath, newContent);
	}
}

processDirectory('api');
