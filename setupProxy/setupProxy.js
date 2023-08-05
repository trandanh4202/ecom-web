import 'http-proxy-middleware';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // cai nay co S chu,
            target: 'https://cuong.hahaho.me/',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': '/api',
            },
        }),
    );
};
// tu tu dang coi sao thieu chu s
