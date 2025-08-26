import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'node:path';
import os from 'node:os';
import { _zRhinoRuneliteRollupBugFixes } from '@deafwave/osrs-botmaker-types'

let osPath = path.posix;
if (os.platform === 'win32') {
	osPath = path.win32;
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
			_zRhinoRuneliteRollupBugFixes(),
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
