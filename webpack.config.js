var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main:'./main'// path.join(__dirname, 'src', 'index.js')
    },
    output: {
        publicPath:'/dist/',
        filename: 'main.js',
        path: path.join(__dirname, './dist'),
        chunkFilename:'[name].chunk.js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader',
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader',
                })
            },
        ]
    },
    plugins:[
        //new ExtractTextPlugin('main.css')
        new ExtractTextPlugin({
            filename:'[name].css',
            allChunks:true
        })
    ]

}