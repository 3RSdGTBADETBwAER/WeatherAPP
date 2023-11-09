const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Nombre del archivo de salida
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader', // Si estás usando Babel para transpilar JavaScript
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
