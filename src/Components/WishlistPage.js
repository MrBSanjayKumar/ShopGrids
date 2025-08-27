import React, { useContext } from 'react';
import { WishlistContext } from '../Components/WishlistProvider';

const WishlistPage = () => {
  const { wishlistItems = [], removeFromWishlist } = useContext(WishlistContext);

  const totalWishlist = wishlistItems.length;

  return (
    <>
      <div className=" total container my-4">
        {totalWishlist > 0 ? (
          <>
            <h4>Total Wishlist Items: {totalWishlist}</h4>
          </>
        ) : (
          <h4 style={{ color: "gray" }}>Your wishlist is empty</h4>
        )}
      </div>

      {totalWishlist > 0 && (
        <div style={{ backgroundColor: "rgba(255, 192, 203, 0.2)" }}>
          <div className="container">
            {wishlistItems.map((item) => (
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
                      onClick={() => removeFromWishlist(item)}
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

export default WishlistPage;
