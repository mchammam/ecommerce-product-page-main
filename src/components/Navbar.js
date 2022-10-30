import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

import Logo from '../img/logo.svg'
import IconClose from '../img/icon-close.svg'
import IconMenu from '../img/icon-menu.svg'
import IconCart from '../img/icon-cart.svg';
import ImgAvatar from '../img/image-avatar.png'

function Navbar() {
    const { totalCartItems } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    function toggleMenuOpen() {
        setMenuOpen(!menuOpen);
    };

    function toggleCartOpen() {
        setCartOpen(!cartOpen);
    };


    return (
        <>
            <div className="navbar">
                <button className="navbar__menu_btn" onClick={toggleMenuOpen}><img src={IconMenu} alt="Menu" /></button>

                <img src={Logo} className="navbar__logo" alt="Logo" />

                <div className={"menu " + (menuOpen ? "menu--open" : "")}>
                    <button className="menu__close" onClick={toggleMenuOpen}><img src={IconClose} alt="Close" /></button>
                    <ul className="menu__list">
                        <a href="#" className="menu__link"><li className="menu__item">Collections</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Men</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Women</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">About</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Contact</li></a>
                    </ul>
                </div>

                <button className="navbar__cart_btn" onClick={toggleCartOpen} >
                    <img src={IconCart} alt="Cart" />
                    <div className="navbar__cart_badge">{totalCartItems()}</div>
                </button>
                <Cart open={cartOpen} />

                <img src={ImgAvatar} className="navbar__avatar" alt="Avatar image" />
            </div>
        </>
    )
}

export default Navbar;