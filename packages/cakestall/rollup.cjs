/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/prefer-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const cleanup = require('rollup-plugin-cleanup');

module.exports = (config, b) => {
	return {
		...config,
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
			cleanup({
				comments: 'none',
				sourcemap: false,
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				include: '**',
			}),
		],
	};
};
