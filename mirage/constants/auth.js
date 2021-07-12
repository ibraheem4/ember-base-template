export default {
  loginRequestTestObject: {
    access_token: 'secret',
    authenticator: 'authenticator:test',
    refresh_token: 'secret',
    user: {
      email: 'test@test.com',
      first_name: '',
      last_name: '',
      pk: '0',
      username: undefined,
    },
  },

  loginRequestFacebookObject: {
    access_token: 'secret',
    authenticator: 'authenticator:facebook',
    refresh_token: 'secret',
    user: {
      email: 'test@test.com',
      first_name: '',
      last_name: '',
      pk: '0',
    },
  },

  loginRequestTokenObject: {
    access_token: 'secret',
    authenticator: 'authenticator:token',
    refresh_token: 'secret',
    user: {
      email: 'test@test.com',
      first_name: '',
      last_name: '',
      pk: '0',
    },
  },

  loginResponseObject: {
    access_token: 'secret',
    refresh_token: 'secret',
    user: {
      email: 'test@test.com',
      first_name: '',
      last_name: '',
      pk: '0',
      username: undefined,
    },
  },

  currentUserResponseObject: {
    email: 'test@test.com',
    id: '0',
  },

  facebookAccessTokenObject: {
    access_token: 'secret',
    token_type: 'bearer',
    expires_in: '0',
  },

  loginIdentificationObject: {
    email: 'test@test.com',
    currentPassword: 'secret',
  },

  signupIdentificationObject: {
    email: 'test@test.com',
    password: 'RealPassword',
    passwordConfirmation: 'RealPassword',
  },
};
