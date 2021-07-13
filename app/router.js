import EmberRouter from '@ember/routing/router';
import config from 'ember-base-template/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('signup');
  this.route('authenticated', { path: '/user' }, function () {
    this.route('profile');
  });
  this.route('not-found', { path: '/*path' });
});
