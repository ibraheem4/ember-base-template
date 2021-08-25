import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service session;
  @service store;
  @service locale;
  @service darkMode;

  @tracked user = undefined;
  @tracked errorMessage = undefined;

  async load() {
    if (this.session.isAuthenticated) {
      try {
        const loadedUser = await this.store.queryRecord('user', { me: true });
        this.user = loadedUser;
        this.locale.setupLocale(loadedUser);
        return loadedUser;
      } catch (error) {
        this.errorMessage = error.error || error;
        await this.session.invalidate();
      }
    } else {
      this.locale.setupLocale();
    }
  }

  async fetch() {
    try {
      await this.load()
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

  async clear() {
    this.session = undefined;
  }
}
