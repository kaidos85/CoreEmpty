"use strict";

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './ClientApp/app.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, './wwwroot/dist/'),
        publicPath: 'dist/',        
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /ClientApp/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
}