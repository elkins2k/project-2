import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Play from './Play'
import HallOfFame from './HallOfFame'


class App extends Component {
  constructor (props) {
    super ()
    this.state = {
      started: false,
    }
    this.returnToGame = this.returnToGame.bind (this)
  }

  returnToGame (started) {
    if (started) {
      return (
          <p className = "header-text">
            Return to game
          </p>
      )
    } else {
      return <div></div>
    }
  }
  
  render () {
    return(
      <div className = "App" >
        <header className = "app-header" >
          <Link to = "/" >
            <h1 className = "header-text">
              Tower Of Hanoi 2.0
            </h1>
          </Link>
          <Link to = "/play" >
            {this.returnToGame (this.state.started)}
          </Link>
          <Link to = "/hall_of_fame" >
            <img
              className = "header-img"
              src="trophy.jpg"
              alt="trophy.jpg"
            />
          </Link>
          
        </header>
        <main>
        <Switch>
              <Route
                exact path = "/"
                render = {
                  list => 
                    <Home
                    />
                }
              />
              <Route
                path = "/play"
                render = {
                  park => 
                    <Play
                    />
                }
              />
              <Route
                path = "/hall_of_fame"
                render = {
                  park => 
                    <HallOfFame
                    />
                }
              />
              <Route
                path = "*"
                render = {
                  () => <Redirect
                    to = "/"
                  />
                }
              />
            </Switch>
        </main>
        <div className = "home-sidebar">

        </div>
      </div>
    );
  }
}

export default App;
