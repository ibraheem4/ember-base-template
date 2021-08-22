import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service currentUser;
  @service darkMode;

  async beforeModel() {
    super.beforeModel(...arguments);

    await this.loadCurrentUser();
  }

  async loadCurrentUser() {
    return await this.currentUser
      .load()
      .then((user) => {
        this.darkMode.setDarkMode(user.darkMode);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
