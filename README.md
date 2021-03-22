# App template

## Prerequisites

You need [`node`](https://nodejs.org/en/download/) and
[`yarn`](https://classic.yarnpkg.com/en/docs/install) installed.

## Development

Start the development server with `yarn dev` and visit
[http://localhost:3000](http://localhost:3000).

## Production

Produce a static build with `yarn build` and serve with `yarn start`.

## Configure GitHub repo

For authentication with GitHub, provide the client id and secret of your GitHub
App as `GITHUB_ID` and `GITHUB_SECRET` environment variables.

## CMS

Visit the CMS at [http://localhost:3000/admin](http://localhost:3000/admin). A
local proxy server for the CMS backend, which operates on local files instead of
the remote git repo, can be started with `yarn cms:dev` (no sign-in credentials
required).

## Site metadata

Fill out the site config in `config/site.json` and `config/metadata.json`, and
change the package name in `package.json`.

## Global styles

Files from `src/styles/*.css` must also be referenced in
`stories/preview-head.html`.

## Fonts

Self-hosted fonts need to go in `src/pages/_document.tsx` as well as
`stories/preview-head.html`.

## Sitemap

By default generates a sitemap for static pages only.

## robots.txt

Defaults to disallowing all crawlers. Edit `scripts/robots.ts`.

## Matomo Analytics

Matomo is configured with the `NEXT_PUBLIC_MATOMO_BASE_URL` and
`NEXT_PUBLIC_MATOMO_SITE_ID` environment variables. Performance metrics are
currently not sent to an analytics service - consider changing this in
`src/pages/_app.tsx`.

## Authentication

The authentication context provider only manages session state, the actual auth
logic should be placed in separate hooks (see `src/api/auth/useBasicAuth.ts` for
an example). Also, if you don't require OAuth2 implicit grant flow, or just need
basic username/password auth, consider using `nextauth` or a custom API route.

## i18n

Translations live in `public/locales/`, and are loaded per page in
`getStaticProps`. Every page should include the "common" namespace.

## a11y

The template is set up for use with
[`@react-aria`](https://react-spectrum.adobe.com/react-aria/index.html)
components. Additionally a skip nav link is placed on every page which will
navigate to "#main". This id should be placed on either `<main>` or `<h1>` on
every page. Route changes are announced by Next.js with an aria live-region.

## Environment variables

- `NEXT_PUBLIC_BASE_URL`: should point to the deployment origin (see
  `config/site.config.ts`).
- `NEXT_PUBLIC_MATOMO_BASE_URL` and `NEXT_PUBLIC_MATOMO_SITE_ID`: configures
  Matomo analytics.
- `GITHUB_ID` and `GITHUB_SECRET`: configures GitHub client for auth with
  NetlifyCMS.

Note: when building a Docker image, environment variables starting with
`NEXT_PUBLIC` must be available during build (i.e. as `ARG` not `ENV`).

Note: while Next.js supports loading environment variables from `.env` and
`.env.local`, it is encouraged to not use those, since we can only point
`docker-compose` to one env file for build args variable substitution in
`docker-compose.yml` (see https://github.com/docker/compose/issues/7847).

## Docker

Build an image and run a container with `docker-compose`:
`docker-compose --env-file .env.production --build up`.

## Styling

This template comes with `tailwind` enabled. This can easily be switched: just
be sure to change `styles/*.css` and `src/modules/ui/Spinner.tsx` as well as
`src/modules/a11y/SkipNavLink.tsx`.
