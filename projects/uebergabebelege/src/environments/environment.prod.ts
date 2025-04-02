export const environment = {
  name: 'production',
  production: true,
  host: '',
  port: '',
  path: 'api',
  configFile: require('../assets/config/production.json'),
  version: require('../../../../package.json').version,
  releaseDate: require('../../../../package.json').releaseDate
}
