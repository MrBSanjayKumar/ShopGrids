import { Carousel } from 'react-bootstrap'
import image1 from '../images/hero/slider-bg1.jpg'
import image2 from '../images/hero/slider-bg2.jpg'
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
import Image5 from '../images/banner/banner-1-bg.jpg'
import Image6 from '../images/banner/banner-2-bg.jpg'
import Image7 from '../images/logo/white-logo.svg'
import Image8 from '../images/footer/credit-cards-footer.png'
import Image9 from '../images/products/01.jpg';
import Image10 from '../images/products/02.jpg';
import Image11 from '../images/products/03.jpg';
import Image12 from '../images/products/04.jpg';
import Image13 from '../images/products/05.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';




const Product = [
  { id: 1, sub: 'Xiaomi Mi Band 5', name: 'Watches', img: CardImg, price: 199 },
  { id: 2, sub: 'Big Power Sound Speaker', name: 'Speaker', img: CardImg1, price: 275 },
  { id: 3, sub: 'WiFi Security Camera', name: 'Camera', img: CardImg2, price: 399 },
  { id: 4, sub: 'iphone 6x plus', name: 'Phones', img: CardImg3, price: 400 },
  { id: 5, sub: 'Wireless Headphones', name: 'Headphones', img: CardImg4, price: 1350 },
  { id: 6, sub: 'Mini Bluetooth Speaker', name: 'Speaker', img: CardImg5, price: 70 },
  { id: 7, sub: 'PX7 Wieless Headphones', name: 'Headphones', img: CardImg6, price: 100 },
  { id: 8, sub: 'Apple MacBook Air', name: 'Laptop', img: CardImg7, price: 899 }
]

function Home() {
  return (
    <>
      <section className='header'>
        <div className='container'>
          <div className='row mx-auto'>
            <div className='col-12 py-3'>
              <Carousel interval={3000} pause={false}>

                <Carousel.Item>
                  <img className="d-block w-100" src={image1} alt="image1" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={image2} alt="image2" />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
        </div>
      </section>


      <section className='banner1'>
        <div className='container'>
          <h2 className='py-4' style={{ textAlign: "center" }}>Trending Product</h2>
          <p className='py-4' style={{ textAlign: "center" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br /> in some form</p>
          <div className='row'>
            {Product.map((product) => (
              <div className='col-lg-3 col-md-6 col-12 py-2 mb-4 car' key={product.id}>
                <div style={{ border: 'none', padding: '10px', backgroundColor: "white" }}>
                  <img className='img' src={product.img} alt='...' width='100%' />
                  <h6>{product.name}</h6>
                  <h4>{product.sub}</h4>
                  <div style={{ color: "#f8b400" }}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='banner2'>
        <div className='conatainer primary'>
          <div style={{ textAlign: 'center' }} className='py-5'>
            <p className='banhead py-2'>Currently Your are using free <br /> Lite version of shopGrids</p>
            <p className='py-2'>Lorem ipsum dolor sit amet, eiusmod tempor <br /> incididunt ut labore.</p>
            <button className='btn btn-light' style={{ border: 'none', borderRadius: '15px' }}>Purchase Now</button>
          </div>
        </div>
      </section>

      <section className='banner3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 py-4'>
              <Carousel interval={3000} pause={false}>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image5} alt="image1" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image9} alt="image2" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image11} alt="image2" />
                </Carousel.Item>

              </Carousel>
            </div>
            <div className='col-lg-6 col-md-6 col-12 py-4'>
              <Carousel interval={3000} pause={false}>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image10} alt="image1" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image6} alt="image2" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image12} alt="image2" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Image13} alt="image2" />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className='shipping-info'>
        <div className='container'>
          <ul>
            <li className='col-lg-3 col-md-6 col-12 py-2 mb-4'>
              <div className="media-icon">
                <i style={{ fontSize: '30px' }} className="bi bi-truck"></i>
              </div>
              <div className="media-body">
                <h5>Free Shipping</h5>
                <span>On order over $99</span>
              </div>
            </li>
            <li className='col-lg-3 col-md-6 col-12 py-2 mb-4'>
              <div className="media-icon">
                <i style={{ fontSize: '30px' }} className="bi bi-chat-left-text"></i>
              </div>
              <div className="media-body">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            <li className='col-lg-3 col-md-6 col-12 py-2 mb-4'>
              <div className="media-icon">
                <i style={{ fontSize: '30px' }} className="bi bi-wallet2"></i>
              </div>
              <div className="media-body">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            <li className='col-lg-3 col-md-6 col-12 py-2 mb-4'>
              <div className="media-icon">
                <i style={{ fontSize: '30px' }} className="bi bi-bootstrap-reboot"></i>
              </div>
              <div className="media-body">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='footer'>
        <div>
          <div className='container'>
            <div className='inner-content'>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-12 py-5'>
                  <img src={Image7} alt='' style={{ cursor: 'pointer', width: '200px' }} />
                </div>
                <div className='col-lg-4 col-md-4 col-12 py-5'>
                  <h2 style={{ color: 'whitesmoke', fontSize: '30px' }}>Subscribe to our Newsletter</h2>
                  <p style={{ color: 'gray' }}>Get all the latest information, Sales and Offers.</p>
                </div>
                <div className='col-lg-4 col-md-4 col-12 py-5'>
                  <from>
                    <input className='email' type='email' placeholder='Eamil address here.....' />
                    <button className='buttem mx-2'>Subscribe</button>
                  </from>
                </div>
              </div>
            </div>
            <div className='middle-content'>
              <div className='row'>
                <div className='col-12 col-lg-3 col-md-6'>
                  <div className='sec1'>
                    <h4 style={{ color: 'white', fontSize: '20px' }}>Get In Touch With Us</h4>
                    <p>Phone: +1 (900) 33 169 7720</p>

                    <ul className='contact-hours'>
                      <li><strong>Monday–Friday:</strong> <br />9.00 am – 8.00 pm</li>
                      <li><strong>Saturday:</strong> <br />10.00 am – 6.00 pm</li>
                    </ul>

                    <p className="mail py-2">
                      <a href="mailto:sanjaysk1683@gmail.com">
                        sanjaysk1683@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className='col-12 col-lg-3 col-md-6'>
                  <h4 style={{ color: 'white', fontSize: '20px' }}>Our Mobile App</h4>
                  <ul className='fooiconbtn'>
                    <li className='btnfoo mb-2 d-flex align-items-center'>
                      <i className="bi bi-apple me-3" style={{ fontSize: '30px' }}></i>
                      <div>
                        <span className="small-title">Download on the</span><br />
                        <span className="big-title">App Store</span>
                      </div>
                    </li>
                    <li className='btnfoo mb-2 d-flex align-items-center'>
                      <i className="bi bi-google-play me-3" style={{ fontSize: '30px' }}></i>
                      <div>
                        <span className="small-title">Download on the</span><br />
                        <span className="big-title">Google Play</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-12 col-lg-3 col-md-6'>
                  <h4 style={{ color: 'white', fontSize: '20px' }}>Information</h4>
                  <ul className='fooiconin'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Downloads</li>
                    <li>Sitemap</li>
                    <li>FAQs Page</li>
                  </ul>
                </div>

                <div className='col-12 col-lg-3 col-md-6'>
                  <h4 style={{ color: 'white', fontSize: '20px' }}>Shop Departments</h4>
                  <ul className='fooiconin'>
                    <li>Computers & Accessories</li>
                    <li>Smartphones & Tablets</li>
                    <li>TV, Video & Audio</li>
                    <li>Cameras, Photo & Video</li>
                    <li>Headphones</li>
                  </ul>
                </div>

              </div>
            </div>
            <div className='footer-content'>
              <div className='row'>
                <div className='col-12 col-lg-4'>
                  <div className='payment py-3'>
                    <span>We Accept: </span>
                    <img src={Image8} alt='' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='copyrigth py-3'>
                    <p>Designed and Developed <span>Sanjay Kumar</span></p>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='footerlink py-3'>
                    <span>Follow Us On: </span>
                    <i className="bi bi-facebook mx-3"></i>
                    <i className="bi bi-whatsapp mx-3"></i>
                    <i className="bi bi-instagram mx-3"></i>
                    <i className="bi bi-google mx-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
