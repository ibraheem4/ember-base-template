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
}
