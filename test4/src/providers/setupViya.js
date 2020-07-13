
async function setupViya() {
    let store = window.restaf.initStore();
    await store.logon(window.appOptions.logonPayload);
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

    