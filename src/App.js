import { useState } from 'react';
import './App.css';
import Header from './containers/Header';
import {Route, Routes} from 'react-router-dom'
import ProductsListing from './containers/ProductsListing';
import ProductDetails from './containers/ProductDetails';

function App() {

  return (
  <div className='App'>
    <Header/>
<Routes>

<Route path="/"  element={<ProductsListing/>} />
<Route path="/product/:productid" element={<ProductDetails/>} />
<Route > 404 Not Found !</Route>

</Routes>
  </div>
  );
}

export default App;   
