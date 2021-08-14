'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'ember-base-template',
    short_name: 'ember-base-template',
    description: '',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'assets/icons/appicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'assets/icons/appicon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'assets/icons/appicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/icons/appicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
