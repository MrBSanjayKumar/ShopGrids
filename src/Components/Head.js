import { Link, useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image1 from '../images/logo/logo.svg'
import "../Components/Head.css"
import Navbar from "./Navbar";
import { useSearch } from './SearchContext'



function Head() {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    navigate("/Product")
  }

  return (
    <>
      <section className="head">
        <div className="container">
          <div className="head-top">
            <ul class="menu-top-link">
              <li>
                {/* <div classNmae="select-position">
                  <select id="select4">
                    <option value="0" selected>$ USD</option>
                    <option value="1">€ EURO</option>
                    <option value="2">$ CAD</option>
                    <option value="3">₹ INR</option>
                    <option value="4">¥ CNY</option>
                    <option value="5">৳ BDT</option>
                  </select>
                </div> */}
              </li>
              <li>
                {/* <div classNmae="select-position">
                  <select id="select4">
                    <option value="0" selected>English</option>
                    <option value="1">Español</option>
                    <option value="2">Filipino</option>
                    <option value="3">Français</option>
                    <option value="4">العربية</option>
                    <option value="5">हिन्दी</option>
                    <option value="6">বাংলা</option>
                  </select>
                </div> */}
              </li>
            </ul>

            <ul className="navlinks mx-auto">
              <li>
                <Link className="link" to='/'>Home</Link>
              </li>
              <li>
                <Link className="link" to='/Product'>Product</Link>
              </li>
              <li>
                <Link className="link" to='/Contact'>Contact Us</Link>
              </li>
            </ul>

            <ul className="navlinks1 mx-4">
              <li>
                <i className="link1 bi bi-person"> Hello</i>
              </li>
              <li>
                <Link style={{ cursor: "progress" }} className="link" to='/SigninPage'><i className="bi bi-box-arrow-in-right"> Login</i></Link>
              </li>

            </ul>
          </div>
        </div>
      </section>


      <nav className="container">
        <div className="navbar">
          <a href="https://shop-grids-3fag.vercel.app/"><img className="ImgLogo" src={Image1} alt="" /></a>
          <div className="search-box">
            <div className="search-select">
              <div className="select-position">
                <select id="select1">
                  <option selected>All</option>
                  <option value="1">option 01</option>
                  <option value="2">option 02</option>
                  <option value="3">option 03</option>
                  <option value="4">option 04</option>
                  <option value="5">option 05</option>
                </select>
                <input
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search"
                />
                <button className="search-btn"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
          <div className="nav-hotline">
            <i className="bi bi-telephone"> Hotline: <span>(+100) 123 456 7890</span></i>
          </div>
          <ul className="nav-icons">
            <li>
              <Link to="/CartPage"><i className="bi bi-cart4"></i></Link>
            </li>
            <li>
              <Link to="/WishlistPage"><i className="bi bi-heart"></i></Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav-content">
      </div>

      <section className="container">
        <div className="nav-follow">
          <ul className="nav-category">
            <li>
              <Navbar />
            </li>
            <li className="all" style={{ fontSize: "1.8em" }}>
              All Categories
            </li>
          </ul>

          <ul className="navlinks3 mx-auto">
              <li>
                <a className="link3" href="#shipping-info">Shipping</a>
              </li>
              <li>
                <a className="link3" href="#scroll">Exclusive</a>
              </li>
              <li>
                <a className="link3" href="#footer">shopGrids</a>
              </li>
            </ul>

        <div className="follow">
          <span>Follow Us On : </span>
          <i className="bi bi-facebook mx-3"></i>
          <i className="bi bi-whatsapp mx-3"></i>
          <i className="bi bi-instagram mx-3"></i>
          <i className="bi bi-google mx-3"></i>
        </div>
        </div>

      </section>

      <div className="nav-content">
      </div>

    </>

  )
}
export default Head