import Menu from './menu'
import logo from '../img/logo.svg'
import Cart from './cart'
import imgAvatar from '../img/image-avatar.png'

function Navbar() {
    return (
        <>
            <Menu />
            <img src={logo} alt="Logo" />
            <Cart />
            <img src={imgAvatar} alt="Avatar" />
        </>
    )
}

export default Navbar;