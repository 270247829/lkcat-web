var path = require('path');
const os = require('os');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router', 'lkcat']
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist/dist')
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /lkcat\/.*?js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },
            {
                test: /\.js[x]?$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                loader: 'happypack/loader?id=happybabel'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize','autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader'
                }),
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
        // rules: [
            // {
            //     test: /\.vue$/,
            //     use: [
            //         {
            //             loader: 'vue-loader',
            //             options: {
            //                 loaders: {
            //                     less: ExtractTextPlugin.extract({
            //                         use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
            //                         fallback: 'vue-style-loader'
            //                     }),
            //                     css: ExtractTextPlugin.extract({
            //                         use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
            //                         fallback: 'vue-style-loader'
            //                     }),
            //                 },
            //                 postLoaders: {
            //                     html: 'babel-loader'
            //                 }
            //             }
            //         },
            //         {
            //             loader: 'lkcat-loader',
            //             options: {
            //                 prefix: false
            //             }
            //         }
            //     ]
            // },
        //     {
        //         test: /\.vue$/,
        //         loader: 'vue-loader',
        //         options: {
        //             loaders: {
        //                 css: 'vue-style-loader!css-loader',
        //                 less: 'vue-style-loader!css-loader!less-loader'
        //             },
        //             postLoaders: {
        //                 html: 'babel-loader'
        //             }
        //         }
        //     },
        //     {
        //         test: /lkcat\/.*?js$/,
        //         loader: 'happypack/loader?id=happybabel'
        //     },
        //     {
        //         test: /\.js$/,
        //         loader: 'happypack/loader?id=happybabel',
        //         exclude: /node_modules/
        //     },
        //     {
        //         test: /\.css$/,
        //         use: ExtractTextPlugin.extract({
        //             use: 'css-loader?minimize',
        //             fallback: 'style-loader'
        //         })
        //     },
        //     {
        //         test: /\.less/,
        //         use: ExtractTextPlugin.extract({
        //             use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
        //             fallback: 'style-loader'
        //         })
        //     },
        //     {
        //         test: /\.scss$/,
        //         use: [
        //             'style-loader',
        //             'css-loader',
        //             'sass-loader?sourceMap'
        //         ]
        //     },
        //     {
        //         test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        //         loader: 'url-loader?limit=1024'
        //     },
        //     {
        //         test: /\.(html|tpl)$/,
        //         loader: 'html-loader'
        //     }
        // ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'hljs': 'highlightjs/highlight.pack.js',
            'iCode': '../../components/code.vue',
            'vue': 'vue/dist/vue.esm.js',
            // 'vue': 'vue/dist/vue.runtime.js'
            '@': resolve('./src')
        }
    }
};