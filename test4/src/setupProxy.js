
        const { createProxyMiddleware } = require('http-proxy-middleware');
        module.exports = function(app) {
        app.use(
            "/" + REACT_APP_APPNAME,
            createProxyMiddleware ({
                target: process.env.REACT_APP_TARGET,
                changeOrigin: true,
                })
        );
        };
    