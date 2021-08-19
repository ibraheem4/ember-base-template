import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked errorMessage;
  @tracked identification;
  @tracked password;

  @action
  async authenticate(error) {
    const { session } = this;
    error.preventDefault();
    let { identification, password } = this;
    const credentials = {
      email: identification,
      password: password,
    };
    const authenticator = 'authenticator:token';
    await this.authenticateWithCredentials(authenticator, credentials);
    try {
      await session.authenticate(authenticator, credentials);
    } catch (error) {
      this.errorMessage =
        error.json.non_field_errors ||
        error.json.password ||
        error.json.email ||
        error.error ||
        error;
    }

    if (session.isAuthenticated) {
      // What to do with all this success?
      this.transitionToRoute('index');
    }
  }

  async authenticateWithCredentials(authenticator, credentials) {
    const { session } = this;
    try {
      await session.authenticate(authenticator, credentials);
    } catch (error) {
      this.errorMessage =
        error.json.non_field_errors ||
        error.json.password ||
        error.json.email ||
        error.error ||
        error;
    }
  }
}
