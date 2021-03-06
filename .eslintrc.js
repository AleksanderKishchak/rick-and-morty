module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "linebreak-style": 0,
        "import/no-extraneous-dependencies": 0,
        "comma-dangle": 0,
        "arrow-parens": ["error", "as-needed"],
        "react/forbid-prop-types": "any",
        "react/jsx-one-expression-per-line": "allow"
    }
};