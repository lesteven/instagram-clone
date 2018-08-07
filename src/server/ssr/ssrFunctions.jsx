import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import serialize from 'serialize-javascript';
import App from '../../common/App';
import configureStore from '../../common/redux/configureStore';
import findComponent from './findComponent';
import checkIfUserLoggedIn from './checkLoggedIn';


const debug = require('debug')('http');

/*
* Control flow
* make redux store and fetch all required data
* turn react component and redux data to string
* inject those two data into the html page
* on client, html takes stringified redux data and
* put into store
*
*/


export function sanitizeData(preloadedState) {
  return serialize(preloadedState);
}

// create html and inject redux data into it
export function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang = "en">
      <head>
        <meta name="viewport" 
          content="width=device-width, initial-scale=1">
        <meta charset = "UTF-8">
        <link rel="icon" href="data:;base64,iVBORwOKGO=" />
        <link rel='stylesheet' href="/styles.css"/>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${ sanitizeData(preloadedState) };
        </script>
        <script src="/client.bundle.js" ></script>
      </body>
    </html>
  `;
}


export async function hydrateClient(req, res) {
  const store = configureStore();

  const { component, foundPath } = findComponent(req);

  checkIfUserLoggedIn(req.user, store);

  const preloadedState = store.getState();
  const context = {};
  
  debug('preloadedState!!!', preloadedState);
  const html = renderToString(
    <Provider store={store}>
      <Router context={context} location={req.url}>
        <App />
      </Router>
    </Provider>
  );

  res.send(renderFullPage(html, preloadedState));
}

export function sendError(res) {
  const serverErr = 500;
  const errorMsg = 'there was an error';
  res.status(serverErr).send(errorMsg);
}

export function handleRender(req, res) {
  try {
    hydrateClient(req, res);
  }
  catch (e) {
    sendError(res);
  }
}


