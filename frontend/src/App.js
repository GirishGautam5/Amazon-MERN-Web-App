import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
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
      </Routes>
    </div>
   </Router>
  );
}

export default App;
