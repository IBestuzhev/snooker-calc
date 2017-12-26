const common = require("./webpack.prod");
const merge = require("webpack-merge")
const util = require("util");
const _ = require("lodash")

const config = merge.smart(
    common,
    {
        output: {
            path: __dirname + "/docs",
            publicPath: '/snooker-calc/',
        }
    }
)
// console.log("111:" + util.inspect(config.plugins[4], {depth: -1}))
config.plugins = _.filter(config.plugins, (el) => {
    let plugName = util.inspect(el, {depth: -1})
    return plugName !== "[CleanWebpackPlugin]"
})
// console.dir(config, {depth: 3})
module.exports = config