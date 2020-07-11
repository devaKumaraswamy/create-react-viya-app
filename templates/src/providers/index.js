module.exports = function index () {
    let code = `
        import AppContext from './AppContext';
        import AppProvider from './AppProvider';
        import withAppContext from './withAppContext';

        export {
            AppContext,
            AppProvider,
            withAppContext
        };
    `;
    return code;

}