#!/usr/bin/env node

let argv = require('yargs').argv;

let cdIntoNewApp = require('./cdIntoNewApp');
let installPackages = require('./installPackages');
let createReactApp = require('./createRequireApp');

let appName = process.argv[ 2 ];
let scriptTag = argv.script == null ? null : argv.script;
let appDirectory = `${process.cwd()}/${appName}`;

const run = async () => {
	let success = await createReactApp(appDirectory);
	if (!success) {
		console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
		return false;
	}
	await cdIntoNewApp(appName);
	await installPackages();
	await updateTemplates(appDirectory, appName,scriptTag);
	console.log('All done');
};
run(); 