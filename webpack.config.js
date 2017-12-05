var path = require('path');

module.exports = {
    entry: "./src/js/root.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        contentBase: ["./dist","./"],
        // publicPath: "",
        historyApiFallback: true
    }
    ,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
};