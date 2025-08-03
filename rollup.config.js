import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'node:path';
import os from 'node:os';

import npcIdMap from './rollup/NpcID.cjs';
import enumIdMap from './rollup/EnumID.cjs';
import collisionDataFlagMap from './rollup/CollisionDataFlag.cjs';
import paramIdMap from './rollup/ParamID.cjs';
import componentIdMap from './rollup/ComponentID.cjs';
import interfaceIdMap from './rollup/InterfaceID.cjs';
import itemIdMap from './rollup/ItemID.cjs';
import spriteIdMap from './rollup/SpriteID.cjs';
import objectIdMap from './rollup/ObjectID.cjs';

let osPath = path.posix;
if (os.platform === 'win32') {
	osPath = path.win32;
}

function soxBugFixes() {
	return {
		name: 'sox-bugfix', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const replacements = [
				{
					regex: /net\.runelite\.api\.NpcID\.(.*?)([ ),;\]\n])/g,
					map: npcIdMap,
				},
				{
					regex: /net\.runelite\.api\.EnumID\.(.*?)([ ),;\]\n])/g,
					map: enumIdMap,
				},
				{
					regex: /net\.runelite\.api\.ItemID\.(.*?)([ ),;\]\n])/g,
					map: itemIdMap,
				},
				{
					regex: /net\.runelite\.api\.SpriteID\.(.*?)([ ),;\]\n])/g,
					map: spriteIdMap,
				},
				{
					regex: /net\.runelite\.api\.CollisionDataFlag\.(.*?)([ ),;\]\n])/g,
					map: collisionDataFlagMap,
				},
				{
					regex: /net\.runelite\.api\.ParamID\.(.*?)([ ),;\]\n])/g,
					map: paramIdMap,
				},
				{
					regex: /net\.runelite\.api\.widgets\.ComponentID\.(.*?)([ ),;\]\n])/g,
					map: componentIdMap,
				},
				{
					regex: /net\.runelite\.api\.widgets\.InterfaceID\.(.*?)([ ),;\]\n])/g,
					map: interfaceIdMap,
				},
				{
					regex: /net\.runelite\.api\.ObjectID\.(.*?)([ ),;\]\n])/g,
					map: objectIdMap,
				},
			];

			let modifiedCode = code;
			for (const { regex, map } of replacements) {
				modifiedCode = modifiedCode.replaceAll(
					regex,
					(_, p1, p2) => `${map[p1]}${p2}`,
				);
			}
			return {
				code: modifiedCode,
				map: null,
			};
		},
	};
}

function removeExports() {
	return {
		name: 'remove-exports', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const exportRegex = /export\s+\{[^}]*\};?/g;
			const modifiedCode = code.replace(exportRegex, '');
			return {
				code: modifiedCode,
				map: null, // or provide a source map if necessary
			};
		},
	};
}

function removeHalfTreeshaken() {
	return {
		name: 'remove-half-treeshaken', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const linesToRemove = code
				.split('\n')
				.filter(
					(line) =>
						!line.startsWith('[') &&
						!line.startsWith('net.runelite.'),
				);
			const modifiedCode = linesToRemove.join('\n');
			return {
				code: modifiedCode,
				map: null, // or provide a source map if necessary
			};
		},
	};
}

/**
 * @type {import('rollup').RollupOptions}
 */
export default glob.sync(osPath.join('src', '*', 'index.ts')).map((file) => {
	return {
		input: file,
		output: {
			file: osPath.join(
				'dist',
				`${path.basename(path.dirname(file))}.js`,
			),
			plugins: [removeExports(), removeHalfTreeshaken()],
		},
		plugins: [
			nodeResolve(),
			cleanup({
				comments: 'none',
				sourcemap: false,
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				include: '**',
			}),
			typescript(),
			soxBugFixes(),
			babel({
				babelHelpers: 'bundled',
				extensions: ['.js', '.ts'],
				presets: [
					[
						'@babel/preset-env',
						{ targets: { rhino: '1.7.14' }, modules: false },
					],
				],
			}),
		],
	};
});
