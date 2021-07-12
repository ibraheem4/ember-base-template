import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends BaseSessionService {
  @service currentUser;
  @tracked errorMessage = undefined;

  async handleAuthentication() {
    super.init(...arguments);

    try {
      await this.currentUser.load();
    } catch (error) {
      this.errorMessage = error.error || error;
      await this.invalidate();
    }
  }
}
