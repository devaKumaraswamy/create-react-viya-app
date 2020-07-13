/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
module.exports = function App (appName) {
    let code = `
import React, { useContext } from "react";

//
// To start at a different component change Hello to your startup component
//
function App(props) {
    const Hello = (props) => {
        let r = (
            <div>
                 <h1> Welcome to viyademo created with create-react-viya-app </h1>
                <h2> Setup for accessing SAS/Viya using restaf and restaflib</h2>
            </div>
    );
    return r;
    };
    return <Hello />;
}
export default App;
        `;
    return code;
}