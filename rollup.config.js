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

let osPath = path.posix;
if (os.platform === 'win32') {
	osPath = path.win32;
}

function soxBugFixes() {
	return {
		name: 'sox-bugfix', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const modifiedNpcIds = code.replaceAll(
				/net\.runelite\.api\.NpcID\.(.*?)([ ),;\]])/g,
				(_, p1, p2) => `${npcIdMap[p1]}${p2}`,
			);

			const modifiedEnumIds = modifiedNpcIds.replaceAll(
				/net\.runelite\.api\.EnumID\.(.*?)([ ),;\]])/g,
				(_, p1, p2) => `${enumIdMap[p1]}${p2}`,
			);

			const modifiedCollisionDataFlags = modifiedEnumIds.replaceAll(
				/net\.runelite\.api\.CollisionDataFlag\.(.*?)([ ),;\]])/g,
				(_, p1, p2) => `${collisionDataFlagMap[p1]}${p2}`,
			);

			const modifiedParamIds = modifiedCollisionDataFlags.replaceAll(
				/net\.runelite\.api\.ParamID\.(.*?)([ ),;\]])/g,
				(_, p1, p2) => `${paramIdMap[p1]}${p2}`,
			);
			return {
				code: modifiedParamIds,
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
			plugins: [removeExports()],
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
