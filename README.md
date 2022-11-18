# NuxtJS v3 with Tailwind CSS 3.1

This project is a starter template to get you going using Nuxt v3 and
Tailwind CSS v3.1

Look at the [nuxt 3 documentation](https://nuxt.com/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install --force
```

## Development Server

You will need a local SSL cert

```shell
brew install mkcert
mkcert -install
mkcert localhost
```

Start the development server and open the home page in your browser

```bash
yarn dev -o
```


## Production

Build the application for production:

```bash
yarn build
yarn start
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
