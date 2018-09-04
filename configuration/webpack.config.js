const path = require('path');

module.exports = () => ({
    entry: path.join(__dirname, '../src/index.js'),
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader'
                }
            }
        ]
    },
    output: {
        filename: 'output-filename.js',
        library: 'LibraryName',
        libraryTarget: 'umd',
        path: path.join(__dirname, '../dist'),
    }
});
