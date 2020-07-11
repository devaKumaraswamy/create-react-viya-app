module.exports = function index () {
    let code = `
        import React from 'react';
        import ReactDOM from 'react-dom';
        import {setupViya, AppProvider} from './providers';
        import App from './App';
        //import * as serviceWorker from 'serviceWorker';

        let appEnv = window.appOptions.appEnv;
        let store  = window.restaf.initStore();
        setupViya(store, appEnv, window.appOptions.logonPayload)
        .then ( (r) => {
            ReactDOM.render(
            <AppProvider value={{store: store, viya: r}}>
                <App />
            </AppProvider>
            , document.querySelector('#root'));
        })
        .catch(err => console.log(JSON.stringify(err, null, 4)))

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA
        // serviceWorker.unregister();
    
    `;
    return code;
}