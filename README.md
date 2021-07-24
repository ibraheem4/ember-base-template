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

## Spawning a new project [](#spawning-a-new-project)

**Spawn a new project from this template.**

For example, for a project named `ember-template-demo` in a directory called `ember-template-demo`, run these commands:

1.  From your development directory (e.g. `$HOME/Projects`), create a new empty repo on Github (e.g `ember-template-demo`).
```
cd $HOME/Projects && \
mygitg && \
mkdir $HOME/Projects/ember-template-demo && \
cd $HOME/Projects/ember-template-demo && \
git init && \
hub create && \
hub browse
```

2. [Duplicate the repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository#mirroring-a-repository) by `push --mirror` into the newly created directory.
```
rm -rf $HOME/Projects/ember-template-demo && \
rm -rf $HOME/Projects/temp && \
mkdir $HOME/Projects/temp && \
cd $HOME/Projects/temp && \
git clone --bare https://github.com/ibraheem4/ember-base-template.git && \
cd $HOME/Projects/temp/ember-base-template.git && \
git push --mirror https://github.com/ibraheem4/ember-template-demo.git && \
cd $HOME/Projects && \
git clone https://github.com/ibraheem4/ember-template-demo.git && \
cd $HOME/Projects/ember-template-demo && \
find . -not -iwholename '*.git*' -type f -print0 | xargs -0 perl -pi -w -e 's/ember-base-template/ember-template-demo/g;' \ && \
git add --all && \
git commit -m "Initial commit: spawned from ember-base-template" && \
git push origin master && \
rm -rf $HOME/Projects/temp && \
hub browse
```

3. Run [quickstart](#quickstart-)
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
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
