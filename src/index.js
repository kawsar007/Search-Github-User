import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// Domain: dev-9tnznwfn.us.auth0.com
// Client Id: z81n5IqNwpBcxvAbTN9WSNVKSD6t44o6

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
       domain= "dev-9tnznwfn.us.auth0.com"
       clientId="z81n5IqNwpBcxvAbTN9WSNVKSD6t44o6"
       redirectUrl={window.location.origin}
       cacheLocation='localstorage'
    >
    <GithubProvider>
       <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
