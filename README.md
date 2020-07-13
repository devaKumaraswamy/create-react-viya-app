# create-react-viya-app

Extends create-react-app for SAS Viya Applications. The goal is to create an environment where you can develop react-based apps for Viya using SAS REST API.The app is configured to use:

1. restaf
2. restaflib
3. restaf-server

## App Creation

```sh
npx create-react-viya-app react-appname --webapp webapp-name  --title webapp-title
```

Only the react-appname is required.
The optional parameters are:

- webapp  -- this maps to APPNAME in @sasoftware/restaf-server. Defaults to **viyademo**

- title   -- The text for the title tag in index.html. Defaults to **SAS/Viya Application**

- script  -- a file which has some HTML script tags to be inserted into index.html - default is a comment line

## Configuration

Set the following in the .env file:

- CLIENTID  -- the default value is viyademo
- CLIENTSECRET -- the default value is secret
- VIYA_SERVER  -- no defaults

Some defaults:

1. The app server runs on localhost:5000/viyademo
2. The clientid redirect is <http://localhost:5000/viyademo>
3. The create-react-app server runs on its standard port(3000)

For more detailed configuration ioptions see
See <https://github.com/sassoftware/restaf-server/wiki>

## Development mode

Run this command to have HMR enabled

```sh
cd to-the-app-directory
npm run dev
```

## Application mode

Run this command( no HMR)

```sh
cd to-the-app-directory
npm run app
```

Then use the created app just as you would any app created with create-react-app


## React Context - AppContext

By default a react context named AppContext is created.

To access the data code something like this:

```js

import React,{useContext} from 'react';
import AppContext from '../providers/AppContext';

let appContext = useContext(AppContext);

let {store, appOptions} = appContext;

let {appenv, logonPayload} = appOptions;

```

See src/components/ItemsListViewer for an example.
