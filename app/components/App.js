/**
 * Created by turjoy on 4/16/17.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Popular from './Popular';
import Battle from './Battle';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route path='/popular' component={Popular} />
          <Route render={function () {
            return <p>Not found</p>
          }} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;