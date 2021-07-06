import './App.css';
import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Modal from './component/Modal';
import PhoneList from './component/PhoneList';
import Details from './component/pages/Details';
import Cart from './component/pages/cart/Cart';
import EmptyPage from './component/pages/EmptyPage';
import Home from './component/pages/Home';

import Footer from './component/Footer';
import AddPhone from './component/pages/AddPhone';
function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/phones" component={PhoneList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/add-new-phone" component={AddPhone}/>
      <Route component={EmptyPage}/>
    </Switch> 
     <Modal/> 
    <Footer/>
  </React.Fragment>     
  );
}

export default App;
