import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Model, { attr } from '@ember-data/model';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it exists', async function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records in JSON API format', async function (assert) {
    const store = this.owner.lookup('service:store');

    // Create a dummy model for application
    const DummyModel = class DummyModel extends Model {
      @attr('string') name;
      @attr('string') address;
    };
    this.owner.register('model:application', DummyModel);

    const basicModel = {
      name: 'Test Name',
      address: 'A Dummy Address',
    };

    const expectedHash = {
      data: {
        attributes: {
          name: basicModel.name,
          address: basicModel.address,
        },
        type: 'applications',
      },
    };

    // Create an instance of DummyModel and serialize
    const serializedRecord = store
      .createRecord('application', basicModel)
      .serialize();

    assert.deepEqual(
      serializedRecord,
      expectedHash,
      'serialized record is equal to the expected hash'
    );
  });
});
