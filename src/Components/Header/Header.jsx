import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Delicious Food Here</h2>
        <p>Explore a wide range of mouthwatering dishes crafted with love and care by our expert chefs.</p>
        <a href="#explore-menu"> <button>View Menu </button></a>
      </div>
    </div>
  );
}

export default Header;
