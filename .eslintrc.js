module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "single", "multiple"],
      "allowSeparatedGroups": true
    }],
    "indent": ["error", 2, {
      "flatTernaryExpressions": true,
      "offsetTernaryExpressions": false
    }],
    "comma-dangle": ["error", "only-multiline"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"]
  }
}