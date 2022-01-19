import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service session;
  @service intl;
  @service locale;
  @service constants;

  @tracked isMobileMenuExpanded = true;

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
