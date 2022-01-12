const path = require('path');//引入node中的一个模块
module.exports = {
    entry: "./src/index.js",//webpack打包的入口
    output: {
        //__dirname:当前文件的绝对路径
        //path.resolve():拼接路径
        path: path.resolve(__dirname,"./build"),//指定生成文件的保存路径
        filename: "DIYBundle.js",//生成的包文件的名字
    }

}