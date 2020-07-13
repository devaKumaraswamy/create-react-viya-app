#!/usr/bin/env node
/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Reference: https://medium.com/@chrisjpatty/extending-create-react-app-to-make-your-own-app-generator-5d7b1ddc246

let argv = require('yargs').argv;
let colors = require('colors');
let installPackages = require('./installPackages');
let createReactApp = require('./createReactApp');
let updateTemplates = require('./updateTemplates');

let reactAppName = process.argv[ 2 ];
let scriptTag = argv.script == null ? '<!-- your script tags go here -->' : argv.script;
let title = argv.title == null ? 'SAS/Viya Application' : argv.title;
let appName = argv.webapp == null ? 'viyademo' : argv.appname;
let appDirectory = `${process.cwd()}/${reactAppName}`;
console.log('------------------------------------------------');
console.log(`React appName: ${reactAppName}`);
console.log(`appName      : ${appName}`);
console.log(`Title        : ${title}`);
console.log(`scriptTag    : ${scriptTag}`);
console.log(`appDirectory : ${appDirectory}`);
console.log('------------------------------------------------');

const run = async () => {
	let success = await createReactApp(reactAppName);
	if (!success) {
		console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
		return false;
	}
	await installPackages(appDirectory);
	await updateTemplates(appDirectory, appName, scriptTag, title);
};

run()
	.then(() => {
		console.log('\nApplication has been created successfully \n'.green);
		console.log(`\nConfigure .env file\n`);
		console.log(
			`For development run this command:    
		        npm run dev`
		);
		console.log(
			`For standard application mode run this command(after npm run build)
			    npm run app`
		);
	})
	.catch((err) => {
		console.log(`${err}`.red);
	})