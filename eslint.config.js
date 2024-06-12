import { configs } from 'eslint-plugin-unicorn';
import eslintPluginImport from 'eslint-plugin-import';
import eslintjs from '@eslint/js';
import { configs as __configs } from 'typescript-eslint';

export default [
	eslintjs.configs.recommended,
	configs['flat/recommended'],
	// eslintPluginImport.configs.recommended,
	// eslintPluginImport.configs.typescript,
	...__configs.recommendedTypeChecked,
	{
		plugins: {
			import: eslintPluginImport,
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@typescript-eslint/explicit-module-boundary-types': ['warn'],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern:
						'^_|^onStart$|^onGameTick$|^onNpcAnimationChanged$|^onActorDeath$|^onHitsplatApplied$|^onInteractingChanged$|^onChatMessage$',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'unicorn/numeric-separators-style': 'off',
			'unicorn/prefer-spread': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-array-for-each': 'off', // TODO: Force array for each
		},
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			parserOptions: {
				tsconfigRootDir: './',
				project: true,
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
	},
	{
		ignores: [
			'**/generated/**',
			'**/dist/**',
			'**/build/**',
			'**/tmp/**',
			'**/node_modules/**',
			'types/**',
			'tsconfig.json',
			'tsconfig.*.json',
			'.prettierrc',
			'.prettierignore',
			'.editorconfig',
			'eslint.config.js',
			'project.json',
			'package.json',
			'**/rollup.cjs',
			'**/tsconfig.json',
			'**/tsconfig.*.json',
			'**/rollup.cjs',
			'**/*.js',
			'scripts',
			'**/*.cjs',

			'**/*.d.ts',
		],
	},
];
