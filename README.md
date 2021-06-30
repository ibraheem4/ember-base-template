# [ember-base-template](https://github.com/ibraheem4/ember-base-template) &middot; [![Continuous Integration](https://github.com/ibraheem4/ember-base-template/workflows/Continuous%20Integration/badge.svg)](https://github.com/ibraheem4/ember-base-template/actions?query=workflow%3A%22Continuous+Integration%22)

_NOTE:_ This app is designed to run on SSL, so the default commands (e.g. `yarn start`) will serve via HTTPS on localhost.

# Quickstart [](#quickstart)

`yarn generate-ssl && yarn && yarn start`

- Visit your Ember Web app at [https://localhost:4200](https://localhost:4200)

## Prerequisites [](#prerequisites)

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)
- [Homebrew](https://brew.sh)

## Installation [](#installation)

- `git clone <repository-url>` this repository
- `cd ember-base-template`
- `yarn generate-ssl` (installs `mkcert` via `homebrew` then generates a public/private key pair at `ssl/`)
- `yarn`

## Running / Development [](#running-developing)

- `ember serve`
- Visit your app at [https://localhost:4200](https://localhost:4200).
- Visit your tests at [https://localhost:4200/tests](https://localhost:4200/tests).

### Code Generators [](#code-generators)

Make use of the many generators for code, try `ember help generate` for more details

### Testing [](#testing)

- `ember test`
- `ember test --server`

### Linting [](#linting)

- `yarn lint`
- `yarn lint:fix`

### Building [](#building)

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying [](#deploying)

Specify what it takes to deploy your app.

### Upgrading [](#upgrading)

Use `yarn` to check for updates to packages

> `yarn upgrade-interactive --latest`

### Continuous Integration [](#continous-integration)

Upload `SERVER_CRT` and `SERVER_KEY` on GitHub

> https://docs.github.com/en/actions/reference/encrypted-secrets

### Using the Git commit template

    git config commit.template .gitmessage

## Further Reading / Useful Links [](#further-reading-useful-links)

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
