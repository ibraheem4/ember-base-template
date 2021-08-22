import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DarkModeService extends Service {
  @service session;

  @tracked enabled = false;

  @action
  async toggleDarkMode() {
    await set(this, 'enabled', !this.enabled);
    await this.session.set('data.darkMode', this.enabled);
  }

  @action
  async setDarkMode(value) {
    await set(this, 'enabled', value);
    await this.session.set('data.darkMode', value);
  }
}
