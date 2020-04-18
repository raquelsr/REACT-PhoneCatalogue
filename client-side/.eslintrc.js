module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "no-debugger": "error",
        "no-console": "error",
        "eqeqeq": "error",
        "no-unused-vars": "off"
    }
};