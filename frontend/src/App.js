import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
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
      </Routes>
    </div>
   </Router>
  );
}

export default App;
