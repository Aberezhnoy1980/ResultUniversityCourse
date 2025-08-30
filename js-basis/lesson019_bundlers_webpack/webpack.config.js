const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// './src/index.js'
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: path.resolve(__dirname, "dist"),
		port: 8080,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html"),
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						targets: "defaults",
						presets: [["@babel/preset-env"]],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), "..."],
	},
};
