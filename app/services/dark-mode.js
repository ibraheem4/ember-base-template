import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class DarkModeService extends Service {
  @service session;
  @service constants;

  @tracked enabled;

  @action
  async toggleDarkMode() {
    await set(this, 'enabled', !this.enabled);
  }

  @action
  async setDarkMode(value) {
    await set(this, 'enabled', value);
  }
}
