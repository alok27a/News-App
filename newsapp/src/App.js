
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  api=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" api={this.api} country="us" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" api={this.api} country="us" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment"api={this.api} country="us" category="entertainment"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" api={this.api} country="us" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" api={this.api} country="us" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
