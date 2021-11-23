import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)

  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={2}
        />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} country="in" category='general' />
          </Route>
          <Route exact path='/business'>
            <News setProgress={setProgress} apikey={apikey} key='business' pageSize={pageSize} country="in" category='business' />
          </Route>
          <Route exact path='/entertainment'>
            <News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={pageSize} country="in" category='entertainment' />
          </Route>
          <Route exact path='/health'>
            <News setProgress={setProgress} apikey={apikey} key='health' pageSize={pageSize} country="in" category='health' />
          </Route>
          <Route exact path='/science'>
            <News setProgress={setProgress} apikey={apikey} key='science' pageSize={pageSize} country="in" category='science' />
          </Route>
          <Route exact path='/sports'>
            <News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pageSize} country="in" category='sports' />
          </Route>
          <Route exact path='/technology'>
            <News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pageSize} country="in" category='technology' />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}
export default App;