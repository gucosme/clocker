module.exports = {
    entry: './src/App.js',
    output: {
        path: './src/public/js/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src/public',
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}