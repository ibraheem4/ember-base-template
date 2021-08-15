import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | authenticated/profile/user-form',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      await render(hbs`<Authenticated::Profile::UserForm />`);

      assert
        .dom('[data-test-form="user-form"]')
        .exists('the user profile form renders');
    });
  }
);
