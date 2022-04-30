import buildQueryString from 'ember-base-template/utils/build-query-string';
import { module, test } from 'qunit';

module('Unit | Utility | build-query-string', function () {
  test('it builds a query string if queryString exists', async function (assert) {
    const baseUrl = 'http://www.example.com';
    const query = { query: 'string', another: 'one' };
    const result = buildQueryString(baseUrl, query);
    assert.deepEqual(
      result,
      'http://www.example.com?query=string&another=one',
      'it builds a query string'
    );
  });

  test('it returns the original url if query string is empty', async function (assert) {
    const baseUrl = 'http://www.example.com';
    let result = buildQueryString(baseUrl, {});
    assert.deepEqual(result, baseUrl, 'it returns the original url');

    result = buildQueryString(baseUrl, '');
    assert.deepEqual(result, baseUrl, 'it returns the original url');
  });

  test('it returns nothing if nothing is passed', async function (assert) {
    const result = buildQueryString();
    assert.deepEqual(result, '', 'it returns an empty string');
  });

  test('it handles question marks', async function (assert) {
    const baseUrl = 'http://www.example.com?test=questionMark';
    const query = { query: 'string', another: 'one' };
    const result = buildQueryString(baseUrl, query);
    assert.deepEqual(
      result,
      'http://www.example.com?test=questionMark&query=string&another=one',
      'it adds query string to url'
    );
  });
});
