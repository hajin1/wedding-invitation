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
                    use: [{
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
                },
                {
                    test: /\.(png|jpg|jpeg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            // options: {
                            //     outputPath: './img',
                            //     name: '[name].[ext]'
                            // }
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