import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { resolve } from 'rsvp';
import Service from '@ember/service';
import AUTH from 'ember-base-template/mirage/constants/auth';

module('Unit | Service | current-user', function (hooks) {
  setupTest(hooks);

  test('should load the current user if authenticated', async function (assert) {
    let currentUser = this.owner.lookup('service:current-user');
    currentUser.store = Service.create({
      queryRecord: () => resolve(AUTH.currentUserAPIObject),
    });
    currentUser.session = Service.create({
      isAuthenticated: true,
    });

    await currentUser.load();

    assert.equal(
      currentUser.user,
      AUTH.currentUserAPIObject,
      'current user is loaded'
    );
  });

  test('should not load the current user if not authenticated', async function (assert) {
    let currentUser = this.owner.lookup('service:currentUser');
    currentUser.session = Service.create({
      isAuthenticated: false,
    });

    await currentUser.load();

    assert.equal(currentUser.user, undefined, 'current user is not loaded');
  });
});
