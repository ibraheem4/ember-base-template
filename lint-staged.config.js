/* eslint-env node */

module.exports = {
  'jsconfig.json': [
    'git reset HEAD', // Remove from staged area
    'git checkout --', // Revert changes
  ],

  '**/*.js': ['prettier --write'],

  '**/*.{scss,css}': ['stylelint'],

  '**/*.hbs': ['ember-template-lint'],
};
