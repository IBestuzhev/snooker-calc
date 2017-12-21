// import common from "./webpack.config";
// import merge, { smart } from "webpack-merge";
const common = require("./webpack.config")
const merge = require("webpack-merge")
const webpack = require('webpack');


const config = merge.smart(
    common,
    {
        entry: {
            app: ["react-hot-loader/patch", "./src/index.tsx"],
        },
        devServer: {
            // contentBase: './static',
            // publicPath: "/dist/",
            hot: true,
            historyApiFallback: {index: "/index.html"}
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development',
                DEBUG: true
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            rules: [
                { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"] },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader", options: { sourceMap: true } }, 
                        { loader: "sass-loader", options: { sourceMap: true } },
                    ],
                }
            ]
        }

    }
)
module.exports = config
// console.dir(config, {depth: 4})