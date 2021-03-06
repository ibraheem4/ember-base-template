import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LogoutButtonComponent extends Component {
  @service session;

  @action
  async invalidateSession() {
    await this.session.invalidate();
  }
}
