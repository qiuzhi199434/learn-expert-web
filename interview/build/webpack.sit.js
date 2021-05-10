/*eslint-disable*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base')

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'development'
})
