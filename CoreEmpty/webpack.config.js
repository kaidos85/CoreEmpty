"use strict";

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './ClientApp/app.js'
    },
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
                test: /\.js?$/, include: /ClientApp/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}