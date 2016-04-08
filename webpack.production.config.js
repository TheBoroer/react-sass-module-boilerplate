var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', ['css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'])
            },
            
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ]
};