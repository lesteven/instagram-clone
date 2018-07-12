module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": [ "error", { "argsIgnorePattern": "next" } ],
    "import/no-extraneous-dependencies": "off",
  },
};
