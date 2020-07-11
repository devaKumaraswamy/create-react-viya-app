module.exports = function env (appName) {
    let code = `
####################################################
# Server configuration
####################################################
APPNAME=${appName}
# Note that APPENTRY is not logon.html anymore
# APPENTRY=index.html
APPLOC=./build
APPHOST=localhost
APPPORT=5000
VIYA_SERVER=
AUTHFLOW=code
#Enter the clientID that is registered for your app on your server(make sure this is your new authorization_code)
CLIENTID=
CLIENTSECRET=

#################################################################
# Application Section
#################################################################
    `;
    return code;
}