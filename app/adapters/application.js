import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = ENV.APP.API_HOST;
  namespace = 'api';

  get headers() {
    let headers = {};
    const { access_token } = this.session.data.authenticated;

    if (this.session.isAuthenticated) {
      headers.Authorization = `Bearer ${access_token}`;
    }

    return headers;
  }

  handleResponse(status) {
    if (status === 401 && this.session.isAuthenticated) {
      this.session.invalidate();
    }
    return super.handleResponse(...arguments);
  }
}
