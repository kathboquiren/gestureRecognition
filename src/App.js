// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load handpose DONE
// 6. Detect function DONE
// 7. Drawing utilities DONE
// 8. Draw functions DONE

import React, { useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'; 

import Login from './login';
import Home from './home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
      </Switch>
      
    </Router>
  );
}

export default App;

