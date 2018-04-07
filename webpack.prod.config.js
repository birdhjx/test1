var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpck-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var merge=require('webpack-merge');
var webpackBaseConfig=require('./webpack.config.js');

webpackBaseConfig.plugins=[];

modules.exports=merge(webpackBaseConfig,{
    output:{
        publicPath:'/dist/',
        filename:'[name].[hash].js'
    },
    plugins:[
        new ExtractTextPlugin({
            filename:'[name].[hash].css',
            allChunks:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new HtmlwebpackPlugin({
            filename:'../index_prod.html',
            template:'./index.ejs',
            inject:false
        })
    ]
}),