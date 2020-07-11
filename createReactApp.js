module.exports =  createReactApp = (appName) => {
	return new Promise((resolve) => {
        shell.exec(`create-react-app ${appName}`, () => {
            console.log('Created react app');
            resolve(true);
        }); 
	});
};
