// eslint-disable-next-line @typescript-eslint/no-var-requires
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: ['./app/index.html', './app/**/*.hbs', './node_modules/**/*.hbs'],
    defaultExtractor: (content) => {
      return content.match(/[^\s"'<>`]*[^\s"':<>`]/g) || [];
    },
    safelist: ['dir', 'ltr', 'rtl'],
  },
};

module.exports = function (defaults) {
  const environment = process.env.EMBER_ENV;
  const isProduction = ['production', 'staging'].includes(environment);

  const options = {
    babel: {
      sourceMaps: 'inline',
    },
    postcssOptions: {
      compile: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          ...(isProduction ? [purgeCSS] : []),
        ],
      },
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/assets/icons/brand-icon.svg',
          outputFileName: 'appicon-',
          convertTo: 'png',
          destination: 'assets/icons/',
          sizes: [32, 96, 192, 512],
        },
      ],
    },
  };

  let app = new EmberApp(defaults, options);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
