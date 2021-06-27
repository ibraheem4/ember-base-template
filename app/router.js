import EmberRouter from '@ember/routing/router';
import config from 'ember-base-template/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');

  this.route('authenticated', { path: '/auth' }, function () {
    this.route('profile');
  });
});
