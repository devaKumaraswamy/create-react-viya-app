/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
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