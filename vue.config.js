module.exports = {
    publicPath: "",
    devServer: {
        open: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        // prot: 8080,
        proxy: {
            '/home': {
                target: 'http://gj.jlykj.cn/api/',
                // pathRewrite: {'^/api' : '/api'},
                //changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            }
        }
    }
}