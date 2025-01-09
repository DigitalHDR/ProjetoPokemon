module.exports = {
    parserOptions: {
      ecmaVersion: 2020,  // Defina a versão do ECMAScript para 2020 ou superior
      sourceType: "module",  // Certifique-se de que está configurado para módulos ES
    },
    env: {
      es6: true,  // Habilita o suporte a ES6
      node: true, // Permite que o ESLint entenda o ambiente Node.js
    },
    overrides: [
      {
        files: ["tailwind.config.js"], // Defina a regra para o arquivo de configuração do Tailwind
        rules: {
          "@typescript-eslint/no-require-imports": "off",  // Desabilita a regra de require
        },
      },
    ],
  };