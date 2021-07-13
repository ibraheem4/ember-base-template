export default function buildQueryString(baseUrl = '', query = {}) {
  const urlString = baseUrl.toString();
  const queryString = Object.keys(query)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
    })
    .join('&');

  const url = _addQueryString(urlString, queryString);

  return url;
}

function _addQueryString(url, queryString) {
  if (queryString) {
    const isQuestionMarkPresent = url && url.includes('?'),
      separator = isQuestionMarkPresent ? '&' : '?';
    url += separator + queryString;
  }

  return url;
}
