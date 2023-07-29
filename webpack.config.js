'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	resolve: {
		extensions: ['.js']
	},
	devServer: {
		static: path.resolve(__dirname, 'public'),
		port: 3000,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			"$": "jquery",
			"jQuery": "jquery"
		}),
	],
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [{
					// Adds CSS to the DOM by injecting a '<style>' tag
					loader: 'style-loader'
				}, {
					// Interprets '@import' and 'url()' like 'import/require()' and will resolve them
					loader: 'css-loader'
				}, {
					// Loader for webpack to process CSS with PostCSS
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: () => [
								autoprefixer
							]
						}
					}
				}, {
					// Loads a SASS/CSS file and compiles it to CSS
					loader: 'sass-loader'
				}]
			}
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'public/javascripts')
	}
};
