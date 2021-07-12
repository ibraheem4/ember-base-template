import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') language;
  @attr('string') username;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('boolean') darkMode;
}
