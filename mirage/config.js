import AUTH from 'ember-base-template/mirage/constants/auth';
import ENV from 'ember-base-template/config/environment';

export default function () {
  // API configuration
  this.urlPrefix = 'https://localhost:8000';
  this.passthrough('/write-coverage');
  this.namespace = '/api';

  // Authentication routes
  this.post('/dj-rest-auth/login/', AUTH.loginResponseObject);
  this.post('/dj-rest-auth/registration', AUTH.loginResponseObject);
  this.get('/users/me', (schema) => {
    return schema.users.first();
  });
  this.post('/dj-rest-auth/facebook/', AUTH.loginResponseObject);
  this.get(
    `https://graph.facebook.com/v${ENV.FACEBOOK_API_VERSION}/oauth/access_token`,
    AUTH.facebookAccessTokenObject
  );
}
