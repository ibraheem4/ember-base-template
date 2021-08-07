module.exports = {
  singleQuote: true,
  useTabs: false,
  printWidth: 80,
  overrides: [
    {
      files: '*.hbs',
      options: {
        parser: 'glimmer',
        singleQuote: false,
      },
    },
  ],
};
