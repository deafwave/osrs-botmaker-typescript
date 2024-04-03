const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const cleanup = require('rollup-plugin-cleanup');
const alias = require('@rollup/plugin-alias');
const npcIdMap = require('./types/runelite/api/NpcID.cjs');
const enumIdMap = require('./types/runelite/api/EnumID.cjs');
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

function runeliteAliases() {
	return {
		name: 'runelite-aliases', // name of the plugin
		renderChunk(code, _chunk, _options) {
			const modifiedCode = code.replaceAll(
				/([\{\( \[\:])(rl)./g,
				(_, p1) => `${p1}net.runelite.api.`,
			);
			return {
				code: modifiedCode,
				map: null, // or provide a source map if necessary
			};
		},
	};
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
			return {
				code: modifiedEnumIds,
				map: null,
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
			runeliteAliases(),
			soxBugFixes(),
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
