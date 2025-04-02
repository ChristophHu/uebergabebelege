// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'development',
  production: false,
  host: 'https://www.localhost.de',
  port: '',
  path: '/api',
  configFile: require('../assets/config/development.json'),
  version: require('../../../../package.json').version,
  releaseDate: require('../../../../package.json').releaseDate,
}