import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class DesktopMenuComponent extends Component {
  @service declare session: string;
}
