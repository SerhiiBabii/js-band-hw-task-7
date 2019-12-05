import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/todos" />
          </Route>
          <Route
            exact
            path="/todos"
            render={() => (
              <MainPage />
            )}
          />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;