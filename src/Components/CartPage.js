import React, { useContext } from 'react';
import { CartContext } from '../Components/CartProvider';

const CartPage = () => {
  const { cartItems = [], removeFromCartItem } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalItems = cartItems.length;

  return (
    <>
      <div className=" total container my-4">
        {totalItems > 0 ? (
          <>
            <h4>Total Items: {totalItems}</h4>
            <h3>Total Price: ${totalPrice}</h3>
          </>
        ) : (
          <h4 style={{ color: "gray" }}>🛒 Your cart is empty</h4>
        )}
      </div>

      {totalItems > 0 && (
        <div style={{ backgroundColor: "rgba(202, 225, 230, 0.2)" }}>
          <div className="container">
            {cartItems.map((item) => (
              <div className="row" key={item.id}>
                <div className="col-lg-3 col-md-6 col-12 py-4 mb-4">
                  <div
                    style={{
                      border: "none",
                      padding: "10px",
                      backgroundColor: "white",
                      flexWrap: "wrap",
                    }}
                  >
                    <img src={item.img} alt="..." width="100%" />
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
                      className="btn btn-danger"
                      onClick={() => removeFromCartItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
