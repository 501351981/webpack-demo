const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const env=require("../config/prod.env")
module.exports=merge(common,{
    mode:"production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
})