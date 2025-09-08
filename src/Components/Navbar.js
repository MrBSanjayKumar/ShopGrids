import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledWrapper>
      {/* Hamburger always visible */}
      <label
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>

      {/* Nav Links */}
      <ul className={`navlinks2 ${open ? "open" : ""}`}>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/Product">Product</Link>
        </li>
        <li>
          <Link className="link" to="/Contact">Contact Us</Link>
        </li>
        <li>
          <a className="link" href="#shipping-info">Shipping</a>
        </li>
        <li>
          <a className="link" href="#scroll">Exclusive</a>
        </li>
        <li>
          <a className="link" href="#footer">shopGrids</a>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Nav menu (hidden by default) */
  .navlinks2 {
    display: none;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    padding: 0 10px;
    margin: 0;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.4s ease;
  }

  /* When menu is open */
  .navlinks2.open {
    max-height: 300px;
    opacity: 1;
    padding: 10px;
  }

  .navlinks2 li {
    list-style: none;
    text-align: left;
    padding: 10px 0;
  }

  .navlinks2 li .link {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  .navlinks2 li .link:hover {
    color: #0d6efd;
  }

  /* Hamburger Icon */
  .hamburger {
    display: inline-block;
  }

  .hamburger svg {
    height: 2.5em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  /* Animate hamburger */
  .hamburger.active svg {
    transform: rotate(-45deg);
  }

  .hamburger.active .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  /* Desktop View */
  @media (max-width: 480px) {
    /* Hide nav links in desktop */
    .navlinks2 {
      display: block;
    }

    /* Keep hamburger visible */
    .hamburger {
      cursor: pointer;
      display: inline-block;
    }
  }
`;

export default Navbar;