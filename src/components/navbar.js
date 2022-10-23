import Logo from '../img/logo.svg'
import IconClose from '../img/icon-close.svg'
import IconMenu from '../img/icon-menu.svg'
import IconCart from '../img/icon-cart.svg';
import ImgAvatar from '../img/image-avatar.png'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <button className="navbar__menu_btn" ><img src={IconMenu} alt="Menu" /></button>

                <img src={Logo} className="navbar__logo" alt="Logo" />

                <div className="menu">
                    <button className="menu__close" ><img src={IconClose} alt="Close" /></button>
                    <ul className="menu__list">
                        <a href="#" className="menu__link"><li className="menu__item">Collections</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Men</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Women</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">About</li></a>
                        <a href="#" className="menu__link"><li className="menu__item">Contact</li></a>
                    </ul>
                </div>

                <button className="navbar__cart" >
                    <img src={IconCart} alt="Cart" />
                    <div className="navbar__cart_badge">3</div>
                </button>

                <img src={ImgAvatar} className="navbar__avatar" alt="Avatar image" />
            </div>
        </>
    )
}

export default Navbar;