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

- webapp  -- this maps to APPNAME in @sasoftware/restaf-server. Defaults to **viyaapp**

- title   -- The text for the title tag in index.html. Defaults to **SAS/Viya Application**

- script  -- a file which has some HTML script tags to be inserted into index.html - default is a comment line

## Configuration

Set the following in the .env file:

- CLIENTID
- CLIENTSECRET
- VIYA_SERVER

Some defaults:

1. The app server runs on localhost:8080
2. The clientid redirect is <http://localhost:8080/viyaapp>
3. The create-react-app server runs on its standard port(3000)

For the rest of the configuration of the app server see
See <https://github.com/sassoftware/restaf-server/wiki>

## Development mode

Run this command to have HMR ebabled

```sh
npm run dev
```

## Application mode

Run this command( no HMR)

```sh
npm run app
```

Then use the created app just as you would any app created with creat-react-app
