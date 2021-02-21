import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import "./global.css"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/compare-skins" component={Search}/>
      <Route exact path="/compare-skins/:skinId" component={Search}/>
      <Route exact path="/politica-de-privacidade" component={PrivacyPolicy}/>
      <Route exact path="/termos-de-uso" component={TermsOfService}/>
      <Route exact path="/contato" component={Contact}/>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
