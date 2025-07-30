import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		plugins: {
			prettier: prettierPlugin,
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		extends: [
			js.configs.recommended,
			// ⛔ Убираем строку 'plugin:prettier/recommended'
			// ⛔ Убираем строку 'plugin:react/recommended'
		],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// ✅ Подключаем правила вручную
			...reactPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,

			// ✅ Prettier-совместимость (отключает конфликтующие правила)
			...prettierConfig.rules,

			// ✅ Включаем Prettier как линтер-правило
			'prettier/prettier': ['error', { endOfLine: 'auto' }],

			// Пример дополнительного правила
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
		},
	},
]);
