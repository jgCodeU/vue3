
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
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
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
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     use: ["source-map-loader"],
            //   },
            // {
            //     test:/\.(jpe?g|png|gif|svg)$/,
            //     // \.(jpe?g|png|gif|svg)$
            //     use:{
            //             // loader:"file-loader",
            //             loader:'url-loader',
            //             options: {
            //                       outputPath: "img",
            //                       name: "img/[name]_[hash].png",
            //                       limit: 1024 * 1024
            //                 }
            //         }
                
            // },
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
                    // to: "./"
                }
                
            ]
        })
        
    ]
    // devtool:'source-map'

}