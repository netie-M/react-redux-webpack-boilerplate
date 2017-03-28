import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

module.exports = {
    entry: {
        app: './src/client/app.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    module:{
        rules: [
            {
                test: /\.css$/ ,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader?name=/images/[name].[ext]'
            },
            {
                test: /\.(svg|woff2|ttf|woff|eot)$/,
                use: 'file-loader?name=/fonts/[name].[ext]'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            inject: true,
            hash: true
        }),
        new ExtractTextWebpackPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};