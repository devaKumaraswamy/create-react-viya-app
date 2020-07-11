#!/usr/bin/env node

let argv = require('yargs').argv;

let cdIntoNewApp = require('./cdIntoNewApp');
let installPackages = require('./installPackages');
let createReactApp = require('./createRequireApp');

let appName = process.argv[ 2 ];
let scriptTag = argv.script == null ? '<!-- your script tags go here -->' : argv.script;
let title = argv.title == null ? 'SAS/Viya Application' : argv.title;
let appDirectory = `${process.cwd()}/${appName}`;

const run = async () => {
	let success = await createReactApp(appName);
	if (!success) {
		console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
		return false;
	}
	await cdIntoNewApp(appDirectory);
	await installPackages();
	await updateTemplates(appDirectory, appName,scriptTag, title);
	console.log('All done');
};
run(); 