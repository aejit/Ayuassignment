import React from 'react';
import './App.css';
import Dashboard from './component/dashboard' ;
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scrollpage from './component/scrollpage';
import Comments from './component/comments';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
        <Router>
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/scrollpage" component={Scrollpage} />
         <Route exact path="/comments" component={Comments} />
         <Route exact paath="/footer" component={Footer} />
        </Router> 
    </div>
  );
}

export default App;
