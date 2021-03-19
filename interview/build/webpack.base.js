/*eslint-disable*/
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');

module.exports = {
    entry: './src/main',
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name]-[hash:8].js'
    },
    module: {
        rules: [
          {
            test: /^((?!bmap).)*\.(ts)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [path.resolve(__dirname,'src')]
          },
          {
            test: /\.ts$/,
            use: [
              'babel-loader',
              'ts-loader'
            ],
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/view/index.html',
            hash: true
        }),
        new FriendlyErrorsWebpackPlugin()
    ],
    stats:"none"
    /**
    1.errors-only 只在发生错误时输出
    2.errors-warnings 只在发生错误或有新的编译时输出
    3.minimal  只在发生错误或有新的编译时输出
    4.none  没有输出
    5.normal  标准输出
    6.verbose  全部输出
    7.detailed  全部输出除了 chunkModules 和 chunkRootModules
    */
}
