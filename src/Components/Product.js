import { useContext, useState } from "react";
import { CartContext } from "./CartProvider";
import { WishlistContext } from "./WishlistProvider";
import { useSearch } from "./SearchContext";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImg from '../images/products/product-1.jpg'
import CardImg1 from '../images/products/product-2.jpg'
import CardImg2 from '../images/products/product-3.jpg'
import CardImg3 from '../images/products/product-4.jpg'
import CardImg4 from '../images/products/product-5.jpg'
import CardImg5 from '../images/products/product-6.jpg'
import CardImg6 from '../images/products/product-7.jpg'
import CardImg7 from '../images/products/product-8.jpg'

const Product1 = [
  { id: 1, sub: 'Xiaomi Mi Band 5', name: 'Watches', img: CardImg, price: 199, dataName: "Watches" },
  { id: 2, sub: 'Big Power Sound Speaker', name: 'Speaker', img: CardImg1, price: 275, dataName: "Speaker" },
  { id: 3, sub: 'WiFi Security Camera', name: 'Camera', img: CardImg2, price: 399, dataName: "Camera" },
  { id: 4, sub: 'iphone 6x plus', name: 'Phones', img: CardImg3, price: 400, dataName: "Iphones" },
  { id: 5, sub: 'Wireless Headphones', name: 'Headphones', img: CardImg4, price: 1350, dataName: "Headphone" },
  { id: 6, sub: 'Mini Bluetooth Speaker', name: 'Speaker', img: CardImg5, price: 70, dataName: "Speaker" },
  { id: 7, sub: 'PX7 Wieless Headphones', name: 'Headphones', img: CardImg6, price: 100, dataName: "Headphone" },
  { id: 8, sub: 'Apple MacBook Air', name: 'Laptop', img: CardImg7, price: 899, dataName: "Laptop mac apple" }
]


const Product = () => {
  const { addTocart, removeFromCartItem, cartItems } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [searchTeram, setSearchTeram] = useState("");
  const { search } = useSearch();

  const allFilter = Product1.filter((item) => {
    const globalMatch = item.dataName
      .toLowerCase()
      .includes(search.toLowerCase());
    const localMatch = item.dataName
      .toLowerCase()
      .includes(searchTeram.toLowerCase());
    return globalMatch && localMatch;
  });

  return (
    <section className="banner1">
      <div className="container">
        <div className="py-4">
          <input
            className="searchbox py-2"
            type="search"
            placeholder="Search here......!"
            id="searchbox"
            onChange={(e) => setSearchTeram(e.target.value)}
          />
        </div>
        <div className="row">
          {allFilter.length > 0 ? (
            allFilter.map((ProductPage) => {
              const inCart = cartItems.some(
                (item) => item.id === ProductPage.id
              );
              const isWishlisted = wishlistItems.some(
                (item) => item.id === ProductPage.id
              );

              return (
                <div
                  className="col-lg-3 col-md-6 col-12 py-4 mb-4"
                  data-name={ProductPage.dataName}
                  key={ProductPage.id}
                >
                  <div
                    style={{
                      border: "none",
                      padding: "10px",
                      backgroundColor: "white",
                      position: "relative", // ✅ make card relative
                    }}
                  >
                    {/* Wishlist Button - top right of image */}
                    <button
                      onClick={() =>
                        isWishlisted
                          ? removeFromWishlist(ProductPage)
                          : addToWishlist(ProductPage)
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        position: "absolute", // ✅ absolute inside relative parent
                        top: "10px",
                        right: "10px",
                      }}
                    >
                      {isWishlisted ? (
                        <i
                          className="bi bi-heart-fill"
                          style={{ color: "red", fontSize: "24px" }}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-heart"
                          style={{ color: "gray", fontSize: "24px" }}
                        ></i>
                      )}
                    </button>

                    <img src={ProductPage.img} alt="..." width="100%" />
                    <h6>{ProductPage.name}</h6>
                    <h4>{ProductPage.sub}</h4>
                    <div style={{ color: "#f8b400" }}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>${ProductPage.price}</p>

                    {inCart ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCartItem(ProductPage)}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => addTocart(ProductPage)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Result Found "{search}"</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
