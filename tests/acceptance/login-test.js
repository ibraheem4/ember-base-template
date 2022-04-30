import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { currentSession } from 'ember-simple-auth/test-support';
import AUTH from 'ember-base-template/mirage/constants/auth';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');

    assert.deepEqual(currentURL(), '/login', '/login route is reached');
  });

  test('user can login via email and logout', async function (assert) {
    const user = this.server.create('user', AUTH.loginIdentificationObject);

    await visit('/login');
    await fillIn('[data-test-input="email"]', user.email);
    await fillIn('[data-test-input="current-password"]', user.currentPassword);
    await click('[data-test-action="login"]');

    let sessionData = currentSession().get('data.authenticated');

    assert.deepEqual(
      sessionData,
      AUTH.loginRequestTokenObject,
      'session data is set'
    );
    assert.deepEqual(
      currentURL(),
      '/',
      'user is redirected to index after login'
    );

    await click('[data-test-action="logout"]');

    sessionData = currentSession().get('data.authenticated');

    assert.deepEqual(sessionData, {}, 'session data is unset after logout');
    assert.deepEqual(
      currentURL(),
      '/',
      'user is redirected to index after logout'
    );
  });
});
