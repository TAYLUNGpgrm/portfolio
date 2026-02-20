import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

export default [
  // Configuração básica de arquivos e globais
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // Configurações recomendadas (Base)
  js.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Regras customizadas e Plugins
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'never']
    },
    settings: {
      'react': {

      }
    }
  },
]
