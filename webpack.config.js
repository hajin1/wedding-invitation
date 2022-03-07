const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        entry: {
            bundle: "./src/js/index.js",
        },
        output: {
            filename: "[name].js",
            path: path.resolve("./public"),
        },
        devServer: {
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        (argv.mode === 'production')
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|jpeg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: './images',
                                name: '[name].[ext]'
                            }
                        }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: `[name].css` }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: '../public/index.html',
            }),
        ]
    };
    return config;
}