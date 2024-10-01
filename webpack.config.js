const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',  // Changed from index.jsx to index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Handles both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,  // Handles .scss files
                use: [

                    'style-loader', // Injects styles into the DOM
                    'css-loader',   // Turns CSS into JS
                    'postcss-loader', // Processes Tailwind
                    'sass-loader',  // Compiles Sass to CSS
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Resolves both .js and .jsx extensions
        alias: {
            '@app': path.resolve(__dirname, 'src/app/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@config': path.resolve(__dirname, 'src/config/'),
            '@features': path.resolve(__dirname, 'src/features/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@layout': path.resolve(__dirname, 'src/layout/'),
            '@lib': path.resolve(__dirname, 'src/lib/'),
            '@module': path.resolve(__dirname, 'src/module/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@shared': path.resolve(__dirname, 'src/shared/'),
            // Include more aliases as needed
        },
    },
    devServer: {
        static: './dist',
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    mode: 'development',
};
