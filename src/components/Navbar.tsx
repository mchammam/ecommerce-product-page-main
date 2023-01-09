import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

import Logo from '../img/logo.svg';
import IconClose from '../img/icon-close.svg';
import IconMenu from '../img/icon-menu.svg';
import IconCart from '../img/icon-cart.svg';
import ImgAvatar from '../img/image-avatar.png';

function Navbar() {
  const { cartIsOpen, setCartIsOpen, totalCartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  function toggleCartOpen() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <>
      <div className="navbar">
        <button className="navbar__menu_btn" onClick={toggleMenuOpen}>
          <img src={IconMenu} alt="Menu" />
        </button>

        <img src={Logo} className="navbar__logo" alt="Logo" />

        <div className={'menu ' + (menuOpen ? 'menu--open' : 'menu--closed')}>
          <button className="menu__close" onClick={toggleMenuOpen}>
            <img src={IconClose} alt="Close" />
          </button>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Collections
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Men
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Women
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button className="navbar__cart_btn" onClick={toggleCartOpen}>
          <img src={IconCart} alt="Cart" />
          <span
            className={
              'navbar__cart_badge ' +
              (totalCartItems() < 1 ? 'navbar__cart_badge--hidden' : '')
            }
          >
            {totalCartItems()}
          </span>
        </button>

        <img src={ImgAvatar} className="navbar__avatar" alt="Avatar image" />
      </div>
    </>
  );
}

export default Navbar;
