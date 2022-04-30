import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | site/logout-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Site::LogoutButton />`);

    assert.deepEqual(
      this.element.textContent.trim(),
      'Logout',
      'the logout button shows the correct text'
    );
    assert
      .dom('[data-test-action="logout"]')
      .exists('the logout button renders');
  });
});
