const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const cleanup = require('rollup-plugin-cleanup');
const alias = require('@rollup/plugin-alias');

module.exports = (config, b) => {
	return {
		treeshake: true,
		...config,
		external: [],
		output: {
			...config.output,
			entryFileNames: () => {
				if (config.output.format === 'cjs') {
					return `index.cjs`;
				} else {
					return `index.mjs`;
				}
			},
			plugins: [
				getBabelOutputPlugin({
					presets: [
						['@babel/preset-env', { targets: { rhino: '1.7.14' } }],
					],
				}),
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
				extensions: [
					'.mjs',
					'.js',
					'.jsx',
					'.json',
					'.sass',
					'.scss',
					'.ts',
					'.tsx',
				],
			}),
			cleanup({
				comments: 'none',
				sourcemap: false,
				extensions: [
					'.mjs',
					'.js',
					'.jsx',
					'.json',
					'.sass',
					'.scss',
					'.ts',
					'.tsx',
				],
				include: '**',
			}),
		],
	};
};
