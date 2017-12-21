const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



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
        // vendor: "./src/vendor.ts",
        // style: "./src/components/app.scss"
    },
    output: {
        // filename: "[name].[hash].bundle.js",
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
        publicPath: '/'
    },
    // devServer: {
        // contentBase: './static',
        // publicPath: "/dist/",
        // hot: true,
        // historyApiFallback: {index: "/index2.html"}
    // },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Development',
          filename: 'index.html',
          template: "static/index.html",
          hash: false,
          inject: true,
        //   excludeChunks: ["vendor"]
        }),
        // new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // extractSass
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

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, 
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};