import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'ember-base-template/config/environment';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('host should be ENV.APP.API_HOST', async function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.deepEqual(
      adapter.host,
      ENV.APP.API_HOST,
      'host is equal to ENV.APP.API_HOST'
    );
  });

  test('namespace should be ENV.APP.API_NAMESPACE', async function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.deepEqual(
      adapter.namespace,
      ENV.APP.API_NAMESPACE,
      'namespace is equal to ENV.APP.API_NAMESPACE'
    );
  });

  test('should set default session properties', async function (assert) {
    let session = this.owner.lookup('service:session');

    assert.false(session.isAuthenticated, 'isAuthenticated defaults to false');
    assert.deepEqual(
      session.data.authenticated,
      {},
      'data.authenticated is an empty object'
    );
  });

  test('should add header with access_token when session is authenticated', async function (assert) {
    const access_token = 'secret';
    let adapter = this.owner.lookup('adapter:application');

    adapter.set('session', {
      isAuthenticated: true,
      data: { authenticated: { access_token } },
    });

    assert.deepEqual(
      adapter.headers.Authorization,
      `Bearer ${access_token}`,
      'access_token is passed into Authorization header'
    );
  });

  test('should not add access_token to header when session is not authenticated', async function (assert) {
    let adapter = this.owner.lookup('adapter:application');

    adapter.set('session', {
      isAuthenticated: false,
      data: { authenticated: {} },
    });

    assert.notOk(
      adapter.headers.Authorization,
      'Authorization header is not set'
    );
  });
});
