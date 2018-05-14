var webpack = require('webpack');
var webpackBaseConfig = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
var fs = require('fs');



// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});
var config = {};
config.output = {};
config.devtool = '#source-map';                             // source-map
config.output.publicPath = '/';                        // 资源路径
config.output.filename = '[name].js';                       // 入口js命名
config.output.chunkFilename = '[name].chunk.js';            // 路由js命名

config.plugins = [
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: ['vender-exten', 'vender-base'],
    //     minChunks: Infinity
    // }),
    // new ExtractTextPlugin({
    //     filename: '[name].css',
    //     allChunks: true,
    //     // disable: true
    // }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js',
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        filename: './index.html',
        template: './src/template/index.ejs',
        inject: false
    })
];
module.exports = merge(webpackBaseConfig, config);