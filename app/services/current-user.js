import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service session;
  @service store;
  @tracked user = undefined;
  @tracked errorMessage = undefined;

  async load() {
    if (this.session.isAuthenticated) {
      try {
        const loadedUser = await this.store.queryRecord('user', { me: true });
        this.user = loadedUser;
        return loadedUser;
      } catch (error) {
        this.errorMessage = error.error || error;
        await this.session.invalidate();
      }
    }
  }
}