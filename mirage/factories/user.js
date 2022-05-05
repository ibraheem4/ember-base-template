import { Factory } from 'ember-cli-mirage';
import { randUser } from '@ngneat/falso';

const user = randUser();

export default Factory.extend({
  email: user.email,
  language: 'en-us',
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
});
