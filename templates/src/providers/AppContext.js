modules.exports = function AppContext () {
    let code = `
        import React from 'react';
        const AppContext = React.createContext();
        export default AppContext;
    `;
    return code;
}