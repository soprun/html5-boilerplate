module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "root": true,
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
  },
  "ignorePatterns": [
    "dist/*",
    "test/*",
    "**/vendor/*.js",
    ".eslintrc.js"
  ],
};
