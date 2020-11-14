import React from 'react';

import Main from './views/Main'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import FormPsic from './components/FormPsic'
import CtrlEsc from './views/CtrlEsc'
import Home from './views/HomePage'






function App() {
  const HomePage = () => {
    return (
      <Home />

    );

  }
  return (

    <div className="App">
      <Main />
    </div >

  );
}

export default App;
