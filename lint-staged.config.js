/* eslint-env node */

module.exports = {
  'jsconfig.json': [
    'git reset HEAD', // Remove from staged area
    'git checkout --', // Revert changes
  ],

  '**/*.js': ['eslint --fix'],

  '**/*.{scss,css}': ['stylelint --fix'],

  '**/*.hbs': ['prettier **/*.hbs --write --parser=glimmer'],
};
