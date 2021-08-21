import Application from '@ember/application';

export function initialize(application: Application): void {
  application.inject('route', 'constants', 'service:constants');
  application.inject('controller', 'constants', 'service:constants');
}

export default {
  initialize,
};
