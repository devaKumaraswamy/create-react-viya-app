module.exports = function App (appName) {
    let code = `
        import React from "react";
        //
        // To start at a different component change Hello to your startup component
        //
        function App(props) {
            const Hello = (props) => {
            return <h1> Welcome to create-react-viya-app </h2>
            }
            return <Hello />
        }
        export default App;
        `;
    return code;
}