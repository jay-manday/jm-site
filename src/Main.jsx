import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PaperScoreThree from './Pages/Work/PaperScoreThree';
import ContingentClock from './Pages/Work/ContingentClock';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/work/paper-score-three' component={PaperScoreThree} />
    <Route exact path='/work/contingent-clock' component={ContingentClock} />
  </Switch>
)

export default Main;
