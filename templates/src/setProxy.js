module.exports = function setProxy (appName) {
    
    let code = `
        const { createProxyMiddleware } = require('http-proxy-middleware');
        module.exports = function(app) {
        app.use(
            "/${appName}",
            createProxyMiddleware ({
                target: "${appName}",
                changeOrigin: true,
                });
        );
        };
    `;
    return code;

}