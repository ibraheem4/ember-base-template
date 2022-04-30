import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'ember-base-template/config/environment';

module('Unit | Adapter | user', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', async function (assert) {
    let adapter = this.owner.lookup('adapter:user');
    assert.ok(adapter);
  });

  test('if query includes me return current user service url', async function (assert) {
    let adapter = this.owner.lookup('adapter:user');
    const query = { me: true },
      url = adapter.urlForQueryRecord(query);

    assert.deepEqual(
      url,
      `${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}/me/`,
      'current user service url is returned'
    );
  });

  test('original url is returned is query does not include me', async function (assert) {
    let adapter = this.owner.lookup('adapter:user');
    const query = {},
      url = adapter.urlForQueryRecord(query);

    assert.deepEqual(
      url,
      `${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}`,
      'original url is returned'
    );
  });
});
