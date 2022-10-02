import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Address from './Components/Address/Address';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import PaymentMethod from './Components/PaymentMethod/PaymentMethod';
import Signup from './Components/Signup/Signup';

function App() {
  return (
   <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/address' element={<Address />} />
        <Route path='/payment' element={<PaymentMethod />} />
        <Route path='/placeorder' element={<OrderSummary />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
