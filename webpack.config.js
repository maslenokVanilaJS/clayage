const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: {
        main: './src/index.js',
        BuiltCertificateApp: './src/BuiltCertificateApp.js',
        BuiltCertificateInlineApp: './src/BuiltCertificateInlineApp.js',
        svgControl: './src/js/pagesCommonModules/svg.js',
        MasterClasses: './src/MasterClasses.js',
        Tematic: './src/Tematic.js',
        AuthorCeramics: './src/AuthorCeramics.js',
        GiftCertificate: './src/GiftCertificate.js',
        ClayAgeLifeHak: './src/ClayAgeLifeHak.js',
        PayInfo: './src/PayInfo.js',

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'

    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true






    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: [{
                        loader: "vue-loader",
                        options: { /* ... */ }
                    },
                    {
                        loader: "vue-svg-inline-loader",
                        options: {
                            inline: {
                                keyword: "svg-inline",
                                strict: true
                            },
                            sprite: {
                                keyword: "svg-sprite",
                                strict: true
                            },
                            addTitle: false,
                            addAttributes: {
                                role: "presentation",
                                focusable: false,
                                tabindex: -1
                            },
                            dataAttributes: [],
                            removeAttributes: ["alt", "src"],
                            md5: true,
                            xhtml: false,
                            svgo: true
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    }

                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        esModule: false
                    }
                }, ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    },


                ]
            }
        ]


    },
    resolve: {
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './index.html',
            filename: 'index.html',
            excludeChunks: ['MasterClasses', 'Tematic'],
            chunks: ['positioning', 'normalize']
        }),

        new HtmlWebpackPlugin({
            hash: false,
            filename: 'ClayAgeMasterClasses.html',
            template: './ClayAgeMasterClasses.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'Tematic', 'AuthorCeramics'],
            chunks: ['normalize', 'MasterClasses']
        }),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'Tematic.html',
            template: './Tematic.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'MasterClasses'],
            chunks: ['normalize', 'Tematic']
        }),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'AuthorCeramics.html',
            template: './AuthorCeramics.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'MasterClasses', 'Tematic'],
            chunks: ['normalize', 'AuthorCeramics']
        }),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'GiftCertificate.html',
            template: './GiftCertificate.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'MasterClasses', 'Tematic', 'AuthorCeramics', 'BuiltCertificateApp'],
            chunks: ['normalize', 'GiftCertificate', 'BuiltCertificateInlineApp']
        }),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'ClayAgeLifeHak.html',
            template: './ClayAgeLifeHak.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'MasterClasses', 'Tematic', 'AuthorCeramics', 'BuiltCertificateApp', 'GiftCertificate', 'BuiltCertificateInlineApp'],
            chunks: ['normalize', 'ClayAgeLifeHak']
        }),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'PayInfo.html',
            template: './PayInfo.html',
            excludeChunks: ['main', 'svgControl', 'positioning', 'MasterClasses', 'Tematic', 'AuthorCeramics', 'BuiltCertificateApp', 'GiftCertificate', 'BuiltCertificateInlineApp', 'ClayAgeLifeHak'],
            chunks: ['normalize', 'PayInfo']
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new VueLoaderPlugin()
    ],




}