import React, { useContext } from 'react'
import  "./order.css"
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First Name' /><input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email' /><input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='city' /><input type="text" placeholder='state' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='country' /><input type="text" placeholder='ZipCode' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">

      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button onClick={"/Food-ing"}>Proceed to payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder