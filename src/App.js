import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDeatail/ProductDetail';
import Shipment from '../src/components/Shipment/Shipment';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h4>Email: {loggedInUser.email}</h4>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path ="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
         <PrivateRoute path ="/inventory">
           <Inventory></Inventory>
         </PrivateRoute>
         <PrivateRoute path="/shipment">
           <Shipment></Shipment>
         </PrivateRoute>
         <Route path ="/logIn">
         <LogIn></LogIn>
         </Route>
        <Route path exact="/">
        <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path ="*">
        <NotFound></NotFound>
        </Route>
        </Switch>

      </Router>
    </userContext.Provider>
  );
}

export default App;

