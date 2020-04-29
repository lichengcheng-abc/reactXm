import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyRouter from './components/common/MyRouter'
import Router from './router/index'
function App() {
  return (
    <div className="App">
       <MyRouter router={Router}></MyRouter>

    </div>
  );
}

export default App;
