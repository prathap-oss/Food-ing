import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import LoginPopup from './Components/LoginPopup/LoignPopup.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      { showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/Food-ing" element={<Home/>} />   
        <Route path='/Food-ing/cart' element={<Cart />} />
        <Route path='/Food-ing/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
