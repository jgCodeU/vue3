
const path = require('path')
const postcssConfig = require('./postcss.config')

module.exports = {
    //webpck打包入口和输出设置
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "bundle.js"
    },

    //对于一些文件(js/esmodule/commenjs等)webpack自身可以解析，但是，对于webpack自身无法解析的文件，则需要进行配置(如css、less等)
    //对非js文件进行打包所需配置
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
        ],
    },
    // devtool:'eval'
    devtool:'source-map'
    // devtool:'inline-source-map'

}