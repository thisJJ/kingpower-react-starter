const local = require('./local')
const dev = require('./dev')
const uat = require('./uat')
const prod = require('./prod')
const preProd = require('./pre-prod')
const preDev1 = require('./pre-dev1')
const preDev2 = require('./pre-dev2')
const preDev3 = require('./pre-dev3')

module.exports = { local, dev, uat, prod, preProd, preDev1, preDev2, preDev3 }
