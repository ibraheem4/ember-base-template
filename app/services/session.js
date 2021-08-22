import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends BaseSessionService {
  @service currentUser;
  @service darkMode;
  @tracked errorMessage = undefined;

  async handleAuthentication() {
    super.init(...arguments);

    try {
      await this.currentUser
        .load()
        .then((user) => {
          this.darkMode.setDarkMode(user.darkMode);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      this.errorMessage = error.error || error;
      await this.invalidate();
    }
  }
}
