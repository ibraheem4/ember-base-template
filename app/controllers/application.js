import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service session;
  @service intl;
  @service locale;
  @service darkMode;

  ICON_X = 'M6 18L18 6M6 6l12 12';
  ICON_HAMBURGER = 'M4 6h16M4 12h16M4 18h16';
  ICON_MOON = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';

  @tracked isMobileMenuExpanded = false;

  @action
  async toggleMobileMenuExpanded() {
    await set(this, 'isMobileMenuExpanded', !this.isMobileMenuExpanded);
  }

  get selectedLocale() {
    const primaryLocale = this.intl.primaryLocale;
    return this.locale.availableLocales.find(
      (locale) => locale.languageCode === primaryLocale
    );
  }
}
