/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
module.exports = function setupViya () {
    let code = `
let restaf = require('@sassoftware/restaf/dist/restaf.js');
async function setupViya() {
    let store = restaf.initStore();
    await store.logon(window.appOptions.logonPayload);
    /* Commonly used services */
    await store.addServices(
        'casManagement',
        'compute',
        'reports',
        'reportImages',
        'reportTransforms',
        'files',
        'folders',
        'microanalyticScore'
    );
    return { store: store, appOptions: window.appOptions };
    }
export default setupViya;

    `;

    return code;
}