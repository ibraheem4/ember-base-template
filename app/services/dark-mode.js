import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DarkModeService extends Service {
  @service session;
  @service constants;

  @action
  async setDarkMode(value) {
    await this.session.set('data.darkMode', value);
  }
}
