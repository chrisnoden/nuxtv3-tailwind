# NuxtJS v3 with Tailwind CSS 3.1

This project is a starter template to get you going using Nuxt v3 and
Tailwind CSS v3.1

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

> NB: eslint currently pinned at 8.22.0 because of an error that occurs in JetBrains IDEs after a breaking change
> in eslint

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server and open the home page in your browser

```bash
yarn dev -o
```

### Or, if you want SSL for your local dev

You will need a local SSL cert

```shell
brew install mkcert
mkcert -install
mkcert localhost
```

Start the development server and open the home page in your browser

```bash
yarn sdev -o
```


## Production

Build the application for production:

```bash
yarn build
yarn start
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
