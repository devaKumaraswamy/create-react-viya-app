module.exports = function (appName, server) {
    
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
                        return "<h2>Viya Server: ${process.env.VIYA_SERVER}<h2>
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

