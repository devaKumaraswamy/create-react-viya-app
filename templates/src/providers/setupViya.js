/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
module.exports = function setupViya () {
    let code = `

async function setupViya (store, logonPayload) {
    await store.logon(logonPayload);
    await store.addServices('casManagement', 'compute', 'reports', 'reportImages', 'reportTransforms, 'files', 'folders' );
    return true;
}
export default setupViya;
    `;

    return code;
}