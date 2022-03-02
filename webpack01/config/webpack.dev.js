const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = (merge, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './public',
        hot: true, //开启后 只对vue文件生效 因为vue-loader 已经处理了
        proxy: {
            "api": {
                target: "http://localhost:8888",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    },
    plugins: [

    ],

}) 