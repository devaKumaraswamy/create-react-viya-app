module.exports = function setupViya () {
    let code = `

async function setupViya (store, appEnv, logonPayload) {
    await store.logon(logonPayload);
    await store.addServices('casManagement', compute, 'reports', 'reportImages', 'reportTransforms, 'files', 'folders' );
    return true;
}
export default setupViya;
    `;

    return code;
}