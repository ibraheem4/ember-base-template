import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | signup/signup-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Signup::SignupForm />`);

    assert
      .dom('[data-test-form="signup-form"]')
      .exists('the signup form renders');
  });
});
