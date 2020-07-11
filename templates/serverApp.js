/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
module.exports = function (appName) {
    
let appCode = `

    let rafserver = require ('@sassoftware/restaf-server');
    rafserver.icli (getCustomHandler());
    function getCustomHandler () {
        let handler = [
            {
                method: ['GET'],
                path  : "/${appName}/develop",
                config: {
                    auth   : false,
                    cors   : true,
                    handler: async (req, h) => {
                        const spawn = require('cross-spawn');
                        let child = spawn('npm', ['start'],{stdio: 'inherit'})
                        let s = process.env.VIYA_SERVER;
                        return "<h2>Viya Server: ${s}<h2>
                                    <h3>Your session is authenticated</h3>
                                    <h3>Your application is now running in another tab </h3>
                                    <h4> HMR is active</h4>";
                    }
            }
        }
        ];
        return handler;
    }`;
return appCode;
}

