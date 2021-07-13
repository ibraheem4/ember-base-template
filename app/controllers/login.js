import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @service currentUser;

  @tracked errorMessage;

  @action
  async authenticate(e) {
    e.preventDefault();
    let { identification, password } = this;
    const credentials = {
      email: identification,
      password: password,
    };
    const authenticator = 'authenticator:token';
    await this.authenticateWithCredentials(authenticator, identification);
    try {
      await this.session.authenticate(authenticator, credentials);
    } catch (error) {
      this.errorMessage =
        error.json.non_field_errors ||
        error.json.password ||
        error.json.email ||
        error.error ||
        error;
    }

    if (this.session.isAuthenticated) {
      // What to do with all this success?
      this.transitionToRoute('index');
    }
  }

  async authenticateWithCredentials(authenticator, credentials) {
    try {
      await this.session.authenticate(authenticator, credentials);
    } catch (error) {
      this.errorMessage =
        error.json.non_field_errors ||
        error.json.password ||
        error.json.email ||
        error.error ||
        error;
    }

    if (this.session.isAuthenticated) {
      // What to do with all this success?
      this.transitionToRoute('index');
    }
  }

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
}
