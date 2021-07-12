import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query) {
    const originalUrl = super.urlForQueryRecord(...arguments);
    if (query.me) {
      delete query.me;
      return `${originalUrl}/me/`;
    }

    return originalUrl;
  }
}
