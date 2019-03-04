import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage';
import WorkPage from './Pages/WorkPage';
import WritingPage from './Pages/WritingPage';
import PaperScoreThree from './Pages/Work/PaperScoreThree';
import ContingentClock from './Pages/Work/ContingentClock';
import Multi from './Pages/Work/Multi';
import Graphics from './Pages/Work/Graphics';
import Urban from './Pages/Work/Urban';
import Foam from './Pages/Work/Foam';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/work' component={WorkPage} />
    <Route exact path='/work/paper-score-three' component={PaperScoreThree} />
    <Route exact path='/work/contingent-clock' component={ContingentClock} />
    <Route exact path='/work/the-multi' component={Multi} />
    <Route exact path='/work/graphics' component={Graphics} />
    <Route exact path='/work/urban-systems' component={Urban} />
    <Route exact path='/work/foam' component={Foam} />
    <Route exact path='/writings' component={WritingPage} />
  </Switch>
)

export default Main;
