// import common from "./webpack.config";
// import merge, { smart } from "webpack-merge";
const common = require("./webpack.config")
const merge = require("webpack-merge")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = merge.smart(
    common,
    {
        output: {
            filename: "[name].[chunkhash].bundle.js",
            chunkFilename: "[name].[chunkhash].chunk.js"
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false
            }),
            new CleanWebpackPlugin(['dist']),
            new webpack.HashedModuleIdsPlugin(),
            extractSass
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractSass.extract({
                        use: [
                            { loader: "css-loader", options: { sourceMap: true } }, 
                            { loader: "sass-loader", options: { sourceMap: true }  }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"
                    })
                }
            ]
        }
    }
)
module.exports = config
// console.dir(config, {depth: 4})