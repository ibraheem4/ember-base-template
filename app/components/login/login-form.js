import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  @service session;
  @service currentUser;

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
