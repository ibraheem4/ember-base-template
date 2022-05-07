# [ember-base-template](https://github.com/ibraheem4/ember-base-template) &middot; [![Continuous Integration](https://github.com/ibraheem4/ember-base-template/workflows/Continuous%20Integration/badge.svg)](https://github.com/ibraheem4/ember-base-template/actions?query=workflow%3A%22Continuous+Integration%22)

_NOTE:_ This app is designed to run on SSL, so the default commands (e.g. `yarn start`) will serve via HTTPS on localhost.

## Prerequisites [](#prerequisites)

1. Buy an Apple computer.
2. Install the following on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)
- [Homebrew](https://brew.sh)
- [Perl](https://www.perl.org)
- [hub](https://github.com/github/hub)

## Quickstart [](#quickstart)

### Include `.env` [](#include-dotenv)

Include `.env` file to set environment variables.  `.env.example` is included as an example.

### Run startup scripts [](#run-startup-scripts)

```
yarn generate-ssl && \
yarn && \
yarn start
```

- Visit your Ember Web app at [https://localhost:4200](https://localhost:4200)

## Running / Development [](#running-developing)

- `ember serve`
- Visit your app at [https://localhost:4200](https://localhost:4200).
- Visit your tests at [https://localhost:4200/tests](https://localhost:4200/tests).

### Code Generators [](#code-generators)

Make use of the many generators for code, try `ember help generate` for more details

### Testing [](#testing)

- `ember test`
- `ember test --server`

#### Coverage testing [](#coverage-testing)

- `yarn test:ember:coverage`

> Open `coverage/index.html` in web browser.

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

Upload `SERVER_CRT` and `SERVER_KEY` on GitHub.

**This step is required for GitHub Actions to work**

> https://docs.github.com/en/actions/reference/encrypted-secrets

### Using the Git commit template

    git config commit.template .gitmessage

## Further Reading / Useful Links [](#further-reading-useful-links)

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- [ember-cli-mirage](https://www.ember-cli-mirage.com/)
- [husky](https://github.com/typicode/husky)
- [Conventional Commits](https://www.conventionalcommits.org)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
