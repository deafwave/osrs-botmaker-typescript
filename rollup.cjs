const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const cleanup = require('rollup-plugin-cleanup');
const alias = require('@rollup/plugin-alias');

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

/** Used for some users during migration */
function forceGlobal() {
	return {
		name: 'remove-$1', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const modifiedCode = code.replaceAll('$1', '');
			return {
				code: modifiedCode,
				map: null, // or provide a source map if necessary
			};
		},
	};
}

module.exports = (config, _b) => {
	return {
		treeshake: false,
		...config,
		external: [],
		output: {
			...config.output,
			plugins: [
				getBabelOutputPlugin({
					presets: [
						['@babel/preset-env', { targets: { rhino: '1.7.14' } }],
					],
				}),
				removeExports(),
			],
		},
		plugins: [
			...config.plugins,
			alias({
				entries: [
					{
						find: /^@packages\/(.+)$/,
						replacement: process.cwd() + '/dist/packages/$1',
					},
				],
			}),
			cleanup({
				comments: 'none',
				sourcemap: false,
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				include: '**',
			}),
		],
	};
};
