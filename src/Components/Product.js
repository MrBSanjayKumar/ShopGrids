import { useState } from 'react'
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
   import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [searchTeram, setSearchTeram] = useState("");

  return (
    <>
      <section className='banner1'>
        <div className='container'>
          <div className='py-4'>
            <input
              className="searchbox py-2"
              type="search"
              placeholder="Search here......!"
              id="searchbox"
              onChange={(e) => {
                setSearchTeram(e.target.value);
              }}
            />
          </div>
          <div className='row'>
            {
              Product1
                .filter((ProductPage) => {
                  if (searchTeram === "") {
                    return true;
                  } else if (
                    ProductPage.dataName.toLowerCase().includes(searchTeram.toLowerCase()) ||
                    ProductPage.dataName.toUpperCase().includes(searchTeram.toUpperCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((ProductPage) => (
                  <div className='col-lg-3 col-md-6 col-12 py-4 mb-4' data-name={ProductPage.dataName} key={ProductPage.id}>
                    <div style={{ border: 'none', padding: '10px', backgroundColor: "white" }}>
                      <img src={ProductPage.img} alt='...' width='100%' />
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
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;
