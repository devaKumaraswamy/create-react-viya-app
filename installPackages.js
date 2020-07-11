module.exports = installPackages = () =>  {
	return new Promise((resolve) => {
		console.log('\nInstalling application dependencies\n'.cyan);
		shell.exec(`npm install --save @sassoftware/restaf-server cross-env http-proxy-middleware`, () => {
			console.log('\nFinished installing packages\n'.green);
			resolve();
		});
	});
};
