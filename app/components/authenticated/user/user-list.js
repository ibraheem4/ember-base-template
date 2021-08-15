import Component from '@glimmer/component';

export default class UserListComponent extends Component {
  get sortedUsers() {
    return this.args.users.sortBy('email');
  }
}
