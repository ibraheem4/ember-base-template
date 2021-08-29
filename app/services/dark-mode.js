import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DarkModeService extends Service {
  @service session;
  @service constants;

  @tracked enabled =
    this.session.data.darkMode || this.constants.DEFAULT_DARK_MODE;

  @action
  toggleDarkMode() {
    const shouldBeDarkMode = !this.enabled;

    this.enabled = shouldBeDarkMode;
  }

  @action
  setDarkMode(value) {
    this.session.data.darkMode = value;
  }
}
