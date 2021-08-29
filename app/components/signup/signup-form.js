import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import ENV from 'ember-base-template/config/environment';
import checkStatus from 'ember-base-template/utils/check-status';

export default class SignupFormComponent extends Component {
  @service session;
  @service currentUser;

  @tracked errorMessage;
  @tracked email;
  @tracked password;
  @tracked passwordConfirmation;

  @action
  async signup() {
    const { session, currentUser } = this;
    let { email, password, passwordConfirmation } = this;
    const credentials = {
      email: email,
      password1: password,
      password2: passwordConfirmation,
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
        await session.authenticate(authenticator, identification);
        await currentUser.fetch();
      })
      .catch((error) => {
        error.text().then((errorText) => {
          const errorTextObject = JSON.parse(errorText);
          this.errorMessage =
            errorTextObject.non_field_errors ||
            errorTextObject.email ||
            errorTextObject.password1 ||
            errorTextObject.password2 ||
            errorTextObject.error ||
            errorTextObject;
        });
      });
  }
}
