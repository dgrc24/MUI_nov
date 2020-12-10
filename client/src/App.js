import React from 'react';

import Main from './views/Main'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import FormPsic from './components/FormPsic'
import CtrlEsc from './views/CtrlEsc'
import Home from './views/HomePage'
import Login from './views/Login';






function App() {
  const HomePage = () => {
    return (
      <Home />

    );

  }
  return (

    <div className="App">
      {/* <Main /> */}
      <Login></Login>
    </div >

  );
}

export default App;
