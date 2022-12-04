import React from 'react';
import axios from 'axios';
import './App.css';
import Takesurvey from '../Takesurvey/Takesurvey';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Understanding from '../Understanding/Understanding';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  const feedback = useSelector(store => store.feedbackReducer);


  return (
    
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* <div className='feedback'>
        <p>Feedback: {feedback}</p>
      </div> */}

      <Router>

        <Route exact path="/">
            <Takesurvey />
        </Route>
        <Route exact path="/feeling">
            <Feeling />
        </Route>
        <Route exact path="/understanding">
            <Understanding />
        </Route>
        <Route exact path="/support">
            <Support />
        </Route>
        <Route exact path="/comments">
            <Comments />
        </Route>
        <Route exact path="/review">
            <Review />
        </Route>
      
      </Router>




      <footer className='App-footer'>
        <p>Week 11 Weekend Project: weekend-redux-feedback-loop</p>
      </footer>    
    </div>
  );
}

export default App;
