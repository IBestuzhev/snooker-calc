const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        // app: ["react-hot-loader/patch", "./src/index.tsx"],
        app: "./src/index.tsx",
        vendor: [
            "react",
            "react-dom",
            "redux",
            "react-redux",
            "lodash",
            'material-ui/TextField',
            "material-ui/AppBar",
            "material-ui/Toolbar",
            "material-ui/Button",
            "material-ui/utils/withWidth",
            'material-ui/Hidden',
            'material-ui/Drawer',
            'material-ui/Grid',
            "material-ui/Chip",
            "material-ui/Avatar",
            "material-ui/Typography",
            "material-ui/styles/withStyles",
        ]
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        path: __dirname + "/dist",
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          filename: 'index.html',
          template: "templates/index.html",
          hash: false,
          inject: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new CopyPlugin([{
            from: "**",
            context: "static/",
            to: "."
        }]),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"] },
            { test: /\.tsx?$/, loaders: ["awesome-typescript-loader"] },

            { test: /\.md$/, loaders: ["babel-loader?presets[]=env&presets[]=react", "react-markdown-loader"]},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, 
        ]
    },

};