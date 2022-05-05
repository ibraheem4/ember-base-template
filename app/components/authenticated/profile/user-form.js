import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class UserProfileFormComponent extends Component {
  @service currentUser;

  @task(function* () {
    yield this.currentUser.user.save();
  })
  saveCurrentUser;
}
