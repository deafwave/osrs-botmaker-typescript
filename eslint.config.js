import nxEslintPlugin from '@nx/eslint-plugin';
import { configs } from 'eslint-plugin-unicorn';
import eslintPluginImport from 'eslint-plugin-import';
import eslintjs from '@eslint/js';
import jsoncParser from 'jsonc-eslint-parser';
import jestConfigs from 'eslint-plugin-jest';
import { configs as __configs } from 'typescript-eslint';

export default [
	eslintjs.configs.recommended,
	configs['flat/recommended'],
	// eslintPluginImport.configs.recommended,
	// eslintPluginImport.configs.typescript,
	...__configs.recommendedTypeChecked,
	{
		files: [
			'**/*.spec.ts',
			'**/*.spec.tsx',
			'**/*.spec.js',
			'**/*.spec.jsx',
		],
		...jestConfigs.configs['flat/recommended'],
		rules: {
			...jestConfigs.configs['flat/recommended'].rules,
			'jest/prefer-expect-assertions': 'off',
		},
	},
	{
		plugins: {
			'@nx': nxEslintPlugin,
			import: eslintPluginImport,
		},
	},
	{
		files: ['*.json', '*.json5'],
		languageOptions: {
			parser: jsoncParser,
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@typescript-eslint/explicit-module-boundary-types': ['warn'],
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: '*',
							onlyDependOnLibsWithTags: ['*'],
						},
					],
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern:
						'^_|^onStart$|^onGameTick$|^onNpcAnimationChanged$|^onActorDeath$|^onHitsplatApplied$|^onInteractingChanged$|^onChatMessage$',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			parserOptions: {
				tsconfigRootDir: './',
				project: ['tsconfig.*?.json'],
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
			'jest.config.cjs',
			'**/rollup.cjs',
			'**/jest.config.cjs',
			'**/tsconfig.json',
			'**/tsconfig.*.json',
			'**/rollup.cjs',
			'**/tools/customRollup/src',
		],
	},
];
