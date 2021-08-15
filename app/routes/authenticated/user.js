import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class AuthenticatedUserRoute extends Route {
  @service store;
  @service fastboot;

  model() {
    return this.findAllUsers.perform();
  }

  @task(function* () {
    const users = yield this.store.findAll('user', {
      reload: this.fastboot.isFastBoot,
    });
    return users;
  })
  findAllUsers;
}
