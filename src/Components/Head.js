import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image1 from '../images/logo/logo.svg'

function Head() {
  return (
    <>
      <nav className="navbar">
        <img className="ImgLogo" src={Image1} alt="" />
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
        <label for='menu-toggle' className="menu-icon">&#9776;</label>
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
          <li>
            <Link className="link" to='/About'>About Us</Link>
          </li>
        </ul>
        <ul className="navlinks1 mx-4">
          <li>
            <Link className="link" to='/SigninPage'><i className="bi bi-box-arrow-in-right"></i></Link>
          </li>
          <li>
            <Link className="link" to='/Register'><i className="bi bi-cart4"></i></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Head
