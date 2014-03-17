'use strict';

var path = require('path');
var webpack = require('webpack');
var DedupePlugin = webpack.optimize.DedupePlugin;

module.exports = {
    cache: true,
    context: path.join(__dirname, '../src/js'),
    entry: [
        './index'
    ],
    resolve: {
        modulesDirectories: ['.']
    },
    module: {
        loaders: [
            {test: /\.hbs$/, loader: 'handlebars'}
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new DedupePlugin()
    ]
};