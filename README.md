# React Giphy

A simple React app that allows you to fetch a random gif from the Giphy API.

<br>

## Technologies Used
[React](https://reactjs.org/) 

[Giphy API](https://developers.giphy.com/docs/api)

[env-cmd](https://www.npmjs.com/package/env-cmd) - for using a .env file in your React app

<br>

## Configuring .env

To configure your .env file, you first need to install the `npm` package `env-cmd`
 
    $ npm i env-cmd

Next you need to create a .env file in the root of your project.

- Inside the .env file, you add your Giphy API key. Be sure to prefix your environment variables with `REACT_APP_` (Create React App enforces this). It should look something like `REACT_APP_API_KEY=<your_api_key>`

Inside your component, you can import the `env` variable and use it to access your API key.

```javascript
const API_KEY = process.env.REACT_APP_API_KEY;
```

Lastly we need to go into the `package.json` file and add `env-cmd` to the beginning of our start script

    "start": "env-cmd -f .env react-scripts start",


Now you can run your app with `npm start`

Note: If your app was already running, you'll need to restart it for the changes to take effect.