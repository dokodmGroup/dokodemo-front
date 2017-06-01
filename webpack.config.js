const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// const AppCachePlugin = require('appcache-webpack-plugin');

// process.env.NODE_ENV = 'production';

module.exports = {
	entry:{
		app:path.resolve(__dirname, 'src/boot.js'),
// 		onepage: './onepage/index.js',
// 		twopage: './twopage/index.js',
// 		app:'./src/boot.js',
// 		vendor:['vue', 'vue-router', 'vuex', 'moment']
	},
	output:{
// 		publicPath:'/vuetodo/',
		path:path.join(__dirname, 'dist'),
		filename:'[name].bundle.js',
		chunkFilename:'[id].bundle.js'
	},
	module:{
		rules:[
			{ 
				test: /\.vue$/, 
				use: 'vue-loader' 
			},
			
// 			{
// 				test : /\.component\.css?$/,
// 				loader:'style!css?modules!postcss-loader'
// 			},
// 			{
// 				test : /\b(?![\w]*component)[\w]+\b\.\bcss/,
// 				loader:'style!css!postcss-loader'
// 			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
                    'css-loader',
                    'postcss-loader',
				]
			},
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
// 				loader: 'babel'
// 			},
			{ 
				test: /\.js$/, 
				use:[
					{
						loader: 'babel-loader', 
// 						exclude: /node_modules/
					}
				]
			},
			{
				test: /.(jpe?g|png|gif|svg|JPE?G|PNG|GIF|SVG)$/i,
				use:'file-loader' 
			},
// 			{
// 				test: /.(jpe?g|png|gif|svg|JPE?G|PNG|GIF|SVG)$/i,
// 				loader: 'url?limit=20000'
// 			},
			
			//This RegExp use for icomoon
			{
				test: /\.(woff\?(\d|\w)*|svg\?(\d|\w)*\#icomoon|svg\?(\d|\w)*)$/,
				use:[
					{
						loader: 'url-loader',
						options:{
							limit:'20000'
						}
					}
				]
			},
			{
				test: /\.(ttf\?(\d|\w)*|eot\?(\d|\w)*|eot\?(\d|\w)*\#iefix)$/, 
				use:'file-loader' 
			}
			//RegExp use for icomoon end
		],
	},
// 	vue: {
//         loaders: {
//             css: ['style-loader','css-loader','postcss-loader']
//         }
//     },
    resolve: {
		alias: {
// 			"vue": path.resolve(__dirname, '../../../../node_modules/vue/dist/vue.js')
			"vue": 'vue/dist/vue.js'
		}
	},
// 	babel: {
//         presets: ['es2015'],
//         plugins: ['transform-runtime']
//     },
	plugins:[
// 		new webpack.optimize.CommonsChunkPlugin({
// 			name: 'vendor', // Specify the common bundle's name.
// // 			minChunks: function (module) {
// // 			   // this assumes your vendor imports exist in the node_modules directory
// // 			   return module.context && module.context.indexOf('node_modules') !== -1;
// // 			}
// 		}),
		// new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
      		template: './src/public/index.html',
		}),
		new FaviconsWebpackPlugin({
			// Your source logo
			logo: './src/public/favicon/logo.png',
			// The prefix for all image files (might be a folder or a name)
			prefix: '',
			// Emit all stats of the generated icons
			// emitStats: false,
			// The name of the json containing all favicon information
			// statsFilename: './src/public/favicon/manifest.json',
			// Generate a cache file with control hashes and
			// don't rebuild the favicons until those hashes change
			// persistentCache: true,
			// Inject the html into the html-webpack-plugin
			// inject: true,
			// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
			// background: '#fff',
			// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
			// title: 'Dokodm web',

			// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
			icons: {
				android: false,
				appleIcon: true,
				appleStartup: false,
				coast: false,
				favicons: false,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		})
// 		new UglifyJSPlugin(),
//         new webpack.optimize.DedupePlugin(),
//         new webpack.DefinePlugin({
// 		  	PRODUCTION: JSON.stringify(true),
// 		}),
    ]
};