const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const env=require("../config/dev.env")

module.exports=merge(common,{
    mode:"development",
    devtool: 'inline-source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:5000' })
    ],
})