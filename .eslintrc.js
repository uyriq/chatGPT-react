module.exports = {
    env: {
        browser: false,
        es2021: true,
    },

    extends: ['prettier'],
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {},
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [ 'prettier'],
    rules: {
        
        'prettier/prettier': 0,
        'linebreak-style': 0,

        // Indent with 4 spaces
        indent: ['off', 4],

        // Indent JSX with 4 spaces
        
        // Indent props with 4 spaces
        
    },
}
