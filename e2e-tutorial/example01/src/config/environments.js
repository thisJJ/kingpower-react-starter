const { local, dev, uat, prod, preProd, preDev1, preDev2, preDev3  } = require('./pointer')

const env = process.env.APP_ENV || 'local-dev'
const version = 'v1.9.2.1273'

const appConfig = {
  /** local development **/
  'local-dev': local.dev,
  'local-uat': local.uat,
  /** deployment **/
  dev,
  uat,
  prod,
  preProd,
  preDev1,
  preDev2,
  preDev3,
}[env]

appConfig.version = version

module.exports = appConfig
