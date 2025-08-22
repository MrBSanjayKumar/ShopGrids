import React, { useContext } from 'react';
import { CartContext } from '../Components/CartProvider';

const CartPage = () => {
  const { cartItems = [], removeFromCartItem } = useContext(CartContext);

  const totalprice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div style={{ backgroundColor: "rgba(202, 225, 230, 0.2)" }}>
        <div className='container'>
          {cartItems.map((item) => (
            <div className='row' key={item.id}>
              <div className='col-lg-3 col-md-6 col-12 py-4 mb-4'>
                <div style={{ border: 'none', padding: '10px', backgroundColor: "white", flexWrap: "wrap" }}>
                  <img src={item.img} alt='...' width='100%' />
                  <h4>{item.sub}</h4>
                  <div style={{ color: "#f8b400" }}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <p>${item.price}</p>
                  <button
                    className='btn btn-danger'
                    onClick={() => removeFromCartItem(item)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className='container'>Total Price: ${totalprice}</h3>
    </>
  );
};

export default CartPage;
