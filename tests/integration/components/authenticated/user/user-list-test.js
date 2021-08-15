import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import AUTH from 'ember-base-template/mirage/constants/auth';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module(
  'Integration | Component | authenticated/user/user-list',
  function (hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    test('it renders', async function (assert) {
      this.server.create('user', AUTH.loginIdentificationObject);
      const users = await this.owner.lookup('service:store').findAll('user');
      this.set('users', users);

      await render(
        hbs`<Authenticated::User::UserList @users={{this.users}} />`
      );

      assert.dom('[data-test-list]').exists('the user list renders');
      assert
        .dom('[data-test-sorted-user="0"]')
        .exists('the authenticated user list renders the correct user');
    });
  }
);
