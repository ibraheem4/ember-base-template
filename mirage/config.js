import AUTH from 'ember-base-template/mirage/constants/auth';

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
}
