module.exports = function index (appName, scripttags, title) {
    
    let ht = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#000000">
                <title>${title}</title>
                <script src="https://unpkg.com/@sassoftware/restaf/dist/restaf.min.js"></script>
                <script src="https://unpkg.com/@sassoftware/restaflib/dist/restaf.min.js"></script>
                <script type="text/javascript" src="/${appName}/appenv"></script>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
                <script src="https://unpkg.com/@webcomponents/custom-elements"></script>
                <script src="https://unpkg.com/@sassoftware/va-report-components@0.5.0/dist/umd/va-report-components.js"></script>
                ${scripttags}
            </head>
            <body>
                <script>
                   window.appOptions = { appEnv: APPENV, logonPayload: LOGONPAYLOAD};
                </script>
                <div id="root">
                </div>
            </body>
        </html>
    `;
    return ht;
}