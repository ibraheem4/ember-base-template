/* eslint-env node */

module.exports = {
  'jsconfig.json': [
    'git reset HEAD', // Remove from staged area
    'git checkout --', // Revert changes
  ],

  '**/*.js': ['eslint --fix', 'git add'],

  '**/*.{scss,css}': ['stylelint --fix', 'git add'],

  '**/*.hbs': ['prettier **/*.hbs --write --parser=glimmer', 'git add'],
};
