const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, sources } = require("webpack");

const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
    target: "web",
  // 设置模式
  
  
  // watch: true,
  
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  
  resolve:{
    extensions:['.wasm', '.mjs', '.js', '.json', '.vue'],
    alias:{
      "js":path.resolve(__dirname, '../src/js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    
    new VueLoaderPlugin()
  ],
};
