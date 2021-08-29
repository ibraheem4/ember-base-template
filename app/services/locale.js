import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import calculateLocale from 'ember-base-template/utils/calculate-locale';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LocaleService extends Service {
  @service session;
  @service intl;
  @service constants;

  @tracked directionValue = undefined;
  @tracked isRtl = undefined;
  @tracked isLtr = undefined;
  @tracked selectedLocale = undefined;
  @tracked userProfileLocale = undefined;
  @tracked calculatedLocale = undefined;

  setupLocale(loadedUser) {
    const selectedLocale = this.session.data.locale;

    if (selectedLocale) {
      const directionValue = this.constants.RTL_LANGUAGES.includes(
        selectedLocale.toLowerCase()
      )
        ? 'rtl'
        : 'ltr';

      getOwner(this)
        .lookup('service:-document')
        .documentElement.setAttribute('dir', directionValue);

      // Set these values on the Service for testing
      this.directionValue = directionValue;
      this.isRtl = directionValue === 'rtl';
      this.isLtr = directionValue === 'ltr';

      this.selectedLocale = selectedLocale;
      this.intl.setLocale(this.selectedLocale);
    } else if (loadedUser && loadedUser.language) {
      const userProfileLocale = loadedUser.language;

      const directionValue = this.constants.RTL_LANGUAGES.includes(
        userProfileLocale.toLowerCase()
      )
        ? 'rtl'
        : 'ltr';

      getOwner(this)
        .lookup('service:-document')
        .documentElement.setAttribute('dir', directionValue);

      // Set these values on the Service for testing
      this.directionValue = directionValue;
      this.isRtl = directionValue === 'rtl';
      this.isLtr = directionValue === 'ltr';

      this.userProfileLocale = userProfileLocale;
      this.intl.setLocale(this.userProfileLocale);
    } else {
      const calculatedLocale = calculateLocale(
        this.intl.locales,
        this.constants.DEFAULT_LOCALE
      );

      const directionValue = this.constants.RTL_LANGUAGES.includes(
        calculatedLocale.toLowerCase()
      )
        ? 'rtl'
        : 'ltr';

      getOwner(this)
        .lookup('service:-document')
        .documentElement.setAttribute('dir', directionValue);

      // Set these values on the Service for testing
      this.directionValue = directionValue;
      this.isRtl = directionValue === 'rtl';
      this.isLtr = directionValue === 'ltr';

      this.calculatedLocale = calculatedLocale;
      this.intl.setLocale(this.calculatedLocale);
    }
  }

  get availableLocales() {
    return this.intl.locales.map((locale) => ({
      languageCode: locale,
      languageText: this.intl.lookup('language_name', locale),
    }));
  }

  @action
  async changeLocale(locale) {
    const directionValue = this.constants.RTL_LANGUAGES.includes(
      locale.languageCode.toLowerCase()
    )
      ? 'rtl'
      : 'ltr';

    getOwner(this)
      .lookup('service:-document')
      .documentElement.setAttribute('dir', directionValue);

    await this.intl.setLocale(locale.languageCode);
  }
}
