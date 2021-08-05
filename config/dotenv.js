'use strict';

const path = require('path');

module.exports = function (environment) {
  return {
    clientAllowedKeys: [
      'EMBER_ENV',
      'FACEBOOK_APP_ID',
      'FACEBOOK_APP_SECRET',
      'FACEBOOK_API_VERSION',
      'DEPLOY_TARGET',
      'GOOGLE_CLIENT_ID',
    ],
    fastbootAllowedKeys: [
      'EMBER_ENV',
      'FACEBOOK_APP_ID',
      'FACEBOOK_APP_SECRET',
      'FACEBOOK_API_VERSION',
      'DEPLOY_TARGET',
      'USE_MIRAGE',
      'GOOGLE_CLIENT_ID',
    ],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), `./.env.${environment}`),
  };
};
