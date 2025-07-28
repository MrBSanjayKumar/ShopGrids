import React, { useContext } from 'react';
import { CartContext } from '../Components/CartProvider';

const CartPage = () => {
  const { cartItem} = useContext(CartContext);
  return (
    <>
      <div style={{backgroundColor: "rgba(202, 225, 230, 0.2)"}}>
        <div className='container'>
        {

        cartItem.map((item,index) =>{
          return(
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-12 py-4 mb-4' key={index.id}>
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
                    </div>
                  </div>
            </div>
          )
        })

        }
      </div>
      </div>
    </>
  )
}

export default CartPage
