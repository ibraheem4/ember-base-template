import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { currentSession } from 'ember-simple-auth/test-support';
import AUTH from 'ember-base-template/mirage/constants/auth';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | user/user', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /user/user redirects to /login if user is not logged in', async function (assert) {
    await visit('/user/user');

    assert.deepEqual(currentURL(), '/login', 'redirects to /login');
  });

  test('visiting /user/user if user is logged in', async function (assert) {
    const user = this.server.create('user', AUTH.loginIdentificationObject);
    await visit('/user/user');

    await fillIn('[data-test-input="email"]', user.email);
    await fillIn('[data-test-input="current-password"]', user.currentPassword);
    await click('[data-test-action="login"]');

    const sessionData = currentSession().get('data.authenticated');

    assert.deepEqual(
      sessionData,
      AUTH.loginRequestTokenObject,
      'session data is set'
    );

    assert.deepEqual(
      currentURL(),
      '/user/user',
      'user is redirected to index after login'
    );
  });
});
