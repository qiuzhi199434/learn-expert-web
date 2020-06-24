const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base')
const path = require('path')
 
module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: 'localhost',  // 一般设置为0.0.0.0 可以供localhost访问和供别人ip访问
        port: 8015,  // 端口
        open: true, // 自动打开浏览器
        compress: true,
        proxy: {
            '/matchName': {
				target: 'http://www.baidu.com',  // 代理目标地址
                pathRewrite: {'^/matchName': '/matchName'}
            }
		}
    }
})