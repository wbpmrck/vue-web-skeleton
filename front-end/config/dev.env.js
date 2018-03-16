'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  dynamicDomain: '"http://localhost:8080/"' //本地的网站后端部署地址
})
