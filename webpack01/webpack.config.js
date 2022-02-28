const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
    target: 'web',//为热更新配套
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js',
        // assetModuleFilename: 'img/[hash:8]_[name][ext]'  //通过type为asset打包输出的文件目录及名称
    },
    devServer: {
        static: './public',
        hot: true, //开启后 只对vue文件生效 因为vue-loader 已经处理了
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', "css-loader",
                    'postcss-loader',
                    // 抽离到postcss.config.js
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [require('autoprefixer')]
                    //         }
                    //     }
                    // },
                    'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                // loader: "file-loader",
                // use: [{
                //     loader: 'url-loader',
                //     options: {
                //         name: "img/[hash:8]_[name].[ext]",
                //         limit: 100 * 1024,
                //         esModule: false,//关闭esmodule 
                //     }
                // },],
                // type: 'javascript/auto'  //webpack5 不在推荐使用url或者file-loader 

                // type: 'asset/resources' //相当于file-loader 不
                // type: 'asset/inline' //相当于url-loader
                type: 'asset',
                generator: {
                    filename: 'img/[hash:8]_[name][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "font/[hash:8]_[name].[ext]",
                        esModule: false,//关闭esmodule 
                    }
                },
                type: 'javascript/auto'
                // type: 'asset/resources', 
                // generator: {
                //     filename: "font/[hash:8]_[name][ext]"
                // }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // use: {
                //     loader:"babel-loader",
                //     options:{
                //         presets:[
                //             "@babel/preset-env"
                //         ]
                //     }
                // }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'documentTitle',
            template: path.join(__dirname, './public/index.html'),
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    to: './public',
                    globOptions: {
                        ignore: ['**/*.html']
                    }
                }
            ]
        }),
        new VueLoaderPlugin()
    ],




}