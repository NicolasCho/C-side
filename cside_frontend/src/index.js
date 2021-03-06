import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Details from './containers/details/Details';
import Search from './containers/search/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Gerenciamento de rotas
ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route exact path="/" exact={true} component={App} />
            <Route exact path="/details/search/:id" component={Search} />
            <Route exact path="/details/:id" component={Details} />
        </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
