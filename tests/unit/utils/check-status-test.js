import checkStatus from 'ember-base-template/utils/check-status';
import { module, test } from 'qunit';

module('Unit | Utility | check-status', function () {
  test('it works if status code is valid', async function (assert) {
    assert.expect(1);

    const response = {
      status: 200,
      statusText: 'this is status text',
    };

    await checkStatus(response)
      .then(async (data) => {
        assert.deepEqual(
          data,
          response,
          'it resolves the response if status code is valid'
        );
      })
      .catch((error) => {
        assert.notOk(
          error,
          'it should not reject the response if status code is valid'
        );
      });
  });

  test('it works if status code is invalid', async function (assert) {
    assert.expect(1);

    const response = {
      status: 400,
      statusText: 'this is an error status',
    };

    await checkStatus(response)
      .then(async (data) => {
        assert.notOk(data, 'it should not resolve if status code is invalid');
      })
      .catch((error) => {
        assert.deepEqual(
          error,
          response,
          'it rejects the response if status code is invalid'
        );
      });
  });
});
