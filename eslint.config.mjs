import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            // Configurações personalizadas
            'indent': ['error', 4], // 4 espaços de indentação
            'semi': ['error', 'never'], // ponto e vírgula nunca
            'quotes': ['error', 'single'] // aspas simples
        }

    }
]
