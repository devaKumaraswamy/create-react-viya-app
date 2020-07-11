/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
module.exports = function App (appName) {
    let code = `
        import React from "react";
        //
        // To start at a different component change Hello to your startup component
        //
        function App(props) {
            const Hello = (props) => {
            return <h1> Welcome to ${appName} developed create with create-react-viya-app </h2>
            }
            return <Hello />
        }
        export default App;
        `;
    return code;
}