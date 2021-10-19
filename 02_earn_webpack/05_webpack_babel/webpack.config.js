
const path = require('path')
const postcssConfig = require('./postcss.config')
const { CleanWebpackPlugin } = require ('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { DefinePlugin } = require ('webpack')
const CopyPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test:/\.css$/,//正则表达式,匹配文件类型
                
                //1.语法糖
                // loader: "css-loader", //规定对应文件使用的loader
                //2.完整写法
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                ]
            },
            {
                test:/\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ] 
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                // type:"asset/resource"
                type:"asset",
                generator:{
                    filename:"img/[name]_[hash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:1024 * 1024
                    },
                }
                
            },
            {
                test:/\.js$/,
                use: {
                    loader:"babel-loader",
                    // options:{
                    //     // plugins:[
                    //     //     "@babel/plugin-transform-arrow-functions",
                    //     //     "@babel/plugin-transform-block-scoping"
                    //     // ]
                    //     presets:[
                    //         "@babel/preset-env"
                    //     ]
                    // }
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'打包生成html',
            template:'./src/public/index.html'
        }),
        // new DefinePlugin({
        //     BASE_URL:'"./'
        // }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/public/favicon.ico",
                    to: "./"
                }
                
            ]
        })
        
    ]
    // devtool:'source-map'

}