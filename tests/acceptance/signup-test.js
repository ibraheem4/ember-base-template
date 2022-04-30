import { module, test, skip } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import AUTH from 'ember-base-template/mirage/constants/auth';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | signup', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /signup', async function (assert) {
    await visit('/signup');

    assert.deepEqual(currentURL(), '/signup', '/signup route is reached');
  });

  test('user can signup with email and password', async function (assert) {
    await visit('/signup');
    assert.deepEqual(currentURL(), '/signup', '/signup route is reached');

    await fillIn(
      '[data-test-input="email"]',
      AUTH.signupIdentificationObject.email
    );
    await fillIn(
      '[data-test-input="password"]',
      AUTH.signupIdentificationObject.password
    );
    await fillIn(
      '[data-test-input="password-confirmation"]',
      AUTH.signupIdentificationObject.passwordConfirmation
    );
    await click('[data-test-action="signup"]');

    assert.deepEqual(
      currentURL(),
      '/',
      'user is redirected to index after signup'
    );
  });

  skip('user is unable to signup if passwords do not match', async function (assert) {
    await visit('/signup');
    assert.deepEqual(currentURL(), '/signup', '/signup route is reached');

    await fillIn(
      '[data-test-input="email"]',
      AUTH.signupIdentificationObject.email
    );
    await fillIn(
      '[data-test-input="password"]',
      AUTH.signupIdentificationObject.password
    );
    await fillIn(
      '[data-test-input="password-confirmation"]',
      'IncorrectPassword'
    );
    await click('[data-test-action="signup"]');

    assert.deepEqual(currentURL(), '/signup', 'user remains on signup page');
  });

  skip('submitting empty form does not authenticate', async function (assert) {
    await visit('/signup');
    assert.deepEqual(currentURL(), '/signup', '/signup route is reached');

    await click('[data-test-action="signup"]');

    assert.deepEqual(currentURL(), '/signup', 'user remains on signup page');
  });
});
