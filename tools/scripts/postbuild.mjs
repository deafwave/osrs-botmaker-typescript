import { readFileSync, writeFileSync } from 'node:fs';
import devkit from '@nx/devkit';
const { readCachedProjectGraph } = devkit;

function invariant(condition, message) {
	if (!condition) {
		console.error(message);
		process.exit(1);
	}
}

const [, , name, version, tag = 'next'] = process.argv;

const graph = readCachedProjectGraph();
const project = graph.nodes[name];

invariant(
	project,
	`Could not find project "${name}" in the workspace. Is the project.json configured correctly?`,
);

const outputPath = project.data?.targets?.build?.options?.outputPath;
invariant(
	outputPath,
	`Could not find "build.options.outputPath" of project "${name}". Is project.json configured  correctly?`,
);

process.chdir(outputPath);

try {
	const data = readFileSync('index.mjs').toString();
	const result = data.replace(/export\s*{\s*([^}]*)\s*};/g, '');
	writeFileSync('index.mjs', result);
} catch (e) {
	console.error(`Error reading package.json file from library build output.`);
}
