"use strict";

var path = require('path');
var webpack = require('webpack');

module.exports = {
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: { main: './ClientApp/app.tsx' },
    //devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
    },
    output: {
        path: path.join(__dirname, './wwwroot/dist/'),       
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /ClientApp/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
}