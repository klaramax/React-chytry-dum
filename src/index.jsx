import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import smartHomeData from './smartHomeData';


const App = () => (
  <>
    <div className="container">
      <Header />
      <Dashboard data={smartHomeData} />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
