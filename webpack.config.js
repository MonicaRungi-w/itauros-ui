const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "itauros-ui",
        globalObject: "this",
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                sideEffects: true,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        }
                    }
                }, 'css-loader']
            },
        ]
    },
    externals: [
        {
            react: "react"
        },
        nodeExternals()
    ],
    externalsPresets: {
        node: true
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
}