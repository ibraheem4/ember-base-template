import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  email: faker.internet.email,
  language: 'en-us',
  username: faker.internet.userName,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  darkMode: faker.datatype.boolean,
});
