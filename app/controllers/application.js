import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';

export default class ApplicationController extends Controller {
  @service session;
  @service intl;

  ICON_X = 'M6 18L18 6M6 6l12 12';
  ICON_HAMBURGER = 'M4 6h16M4 12h16M4 18h16';
  ICON_MOON = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';

  RTL_LANGUAGES = Object.freeze(['ar']);

  @tracked isMobileMenuExpanded = false;
  @tracked isDarkModeEnabled = false;

  get darkMode() {
    return this.isDarkModeEnabled || this.session.data.darkMode;
  }

  @action
  async toggleMobileMenuExpanded() {
    await set(this, 'isMobileMenuExpanded', !this.isMobileMenuExpanded);
  }

  @action
  async toggleDarkMode() {
    await set(this, 'isDarkModeEnabled', !this.isDarkModeEnabled);
    await this.session.set('data.darkMode', this.isDarkModeEnabled);
  }

  get availableLocales() {
    return this.intl.locales.map((locale) => ({
      languageCode: locale,
      languageText: this.intl.lookup('language_name', locale),
    }));
  }

  get selectedLocale() {
    const primaryLocale = this.intl.primaryLocale;
    return this.availableLocales.find(
      (locale) => locale.languageCode === primaryLocale
    );
  }

  @action
  async changeLocale(locale) {
    const directionValue = this.RTL_LANGUAGES.includes(
      locale.languageCode.toLowerCase()
    )
      ? 'rtl'
      : 'ltr';

    getOwner(this)
      .lookup('service:-document')
      .documentElement.setAttribute('dir', directionValue);

    await this.intl.setLocale(locale.languageCode);
    await this.session.set('data.locale', this.intl.primaryLocale);
  }
}
