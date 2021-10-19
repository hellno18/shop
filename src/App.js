import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default.js';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
