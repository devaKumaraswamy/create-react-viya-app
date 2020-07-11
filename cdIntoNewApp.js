module.exports = cdIntoNewApp = (appDir) => {
	return new Promise((resolve) => {
		shell.exec(`cd ${appDir`, () => {
			resolve();
		});
	});
};
