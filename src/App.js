import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddPlayerForm from './AddPlayerForm'
import Counter from './Counter'
import Player from './Player'
import Scoreboard from './Scoreboard'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

class App extends Component {
    render() {
      return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={AddPlayerForm} />
            <Route exact path="/" component={Counter} />
            <Route exact path="/" component={Player} />
            <Route exact path="/" component={Scoreboard} />
            <Route exact path="/" component={Stats} />
            <Route exact path="/" component={Stopwatch} />
          </Switch>
        </div>
      </Router>
      );
    }
  }
  
  export default App;