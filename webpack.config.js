const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });


module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
       
        {
          test: /\.css$/,
          use:['style-loader','css-loader']
          }
          
        

       
      ]
    },
    plugins: [htmlPlugin],
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //         // Options similar to the same options in webpackOptions.output
  //         // both options are optional
     
  //         filename: "./src/style/style.scss"
  //     })
  // ]
  
  };