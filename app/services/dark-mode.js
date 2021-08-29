import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DarkModeService extends Service {
  @service session;
  @service constants;

  @tracked enabled;

  @action
  toggleDarkMode() {
    const shouldBeDarkMode = !this.enabled;

    this.enabled = shouldBeDarkMode;
  }

  @action
  setDarkMode(value) {
    this.enabled = value;
  }
}
