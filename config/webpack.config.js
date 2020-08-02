module.exports = {
    mode: "production",
    entry: {
        easyregexp: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "EasyRegExp",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                       presets:[ "@babel/preset-env" ],
                       plugins: [
                           [ "@babel/plugin-proposal-class-properties", { loose: true } ]
                       ]
                    }
                }]
            }
        ]
    }
}
