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
       
        return <Hello/>
    }
    export default App;
        `;
    return code;
}