import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import LoignPopup from './Components/LoginPopup/LoignPopup.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      { showLogin ? <LoignPopup setShowLogin={setShowLogin}/> : <></>}
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
