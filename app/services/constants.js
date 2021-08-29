import Service from '@ember/service';

export default class ConstantsService extends Service {
  DEPLOY_TARGET_SLUG = Object.freeze({
    test: 'TEST',
    development: 'LOCAL',
    remote: 'DEV',
    qa: 'QA',
    staging: 'STAGING',
  });
  DEFAULT_LOCALE = Object.freeze('en-us');
  DEFAULT_DARK_MODE = Object.freeze(true);
  RTL_LANGUAGES = Object.freeze(['ar']);
  ICON_X = Object.freeze('M6 18L18 6M6 6l12 12');
  ICON_HAMBURGER = Object.freeze('M4 6h16M4 12h16M4 18h16');
  ICON_MOON = Object.freeze('M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
}
