const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')
module.exports = merge(commonConfig, {
    // development 开发阶段, 会设置development
    // production 准备打包上线的时候, 设置production
    mode: "development",
    // 设置source-map, 建立js映射文件, 方便调试代码和错误
    devtool: "source-map",
    devServer:{
      contentBase:'../public',
      hot:true,//开启模块热更新（HMR）
      host:"0.0.0.0",//设置主机地址
      // port:"8000",//设置端口
      open:true,//自动打开浏览器
      compress:true,//传输时开启gzip压缩
    },
})

  