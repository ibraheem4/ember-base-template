import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
import ENV from 'ember-base-template/config/environment';
import checkStatus from 'ember-base-template/utils/check-status';
import { action } from '@ember/object';

export default class SignupController extends Controller {
  @service session;
  @service currentUser;

  @tracked errorMessage;
  @tracked email;
  @tracked password;
  @tracked passwordConfirmation;

  @action
  async signup() {
    const credentials = {
      email: this.email,
      password1: this.password,
      password2: this.passwordConfirmation,
    };

    const backendRegistrationUrl =
      `${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}` +
      '/dj-rest-auth/registration/';

    fetch(backendRegistrationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'same-origin',
    })
      .then(checkStatus)
      .then((response) => response.json())
      .then(async () => {
        const authenticator = 'authenticator:token';
        const identification = {
          email: credentials.email,
          password: credentials.password1,
        };
        await this.session.authenticate(authenticator, identification);
        if (this.session.isAuthenticated) {
          // What to do with all this success?
          this.transitionToRoute('index');
        }
        await this.currentUser.load();
      })
      .catch((error) => {
        this.errorMessage =
          error.json.non_field_errors ||
          error.json.email ||
          error.json.password1 ||
          error.json.password2 ||
          error.error ||
          error;
      });
  }
}
