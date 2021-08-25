import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends BaseSessionService {
  @service currentUser;

  @tracked errorMessage = undefined;

  async handleAuthentication() {
    this.currentUser.fetch();

    super.handleAuthentication(...arguments);
  }

  async handleInvalidation() {
    this.currentUser.clear();

    super.handleInvalidation(...arguments);
  }
}
