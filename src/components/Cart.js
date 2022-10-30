import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function Cart({ open }) {
    const { cartItems } = useContext(CartContext)
    return (
        <>
            <div className={"cart " + (open ? "cart--open" : "")}>
                <h3 className="cart__title">Cart</h3>
                {cartItems.map(itemData => (
                    <CartItem itemData={itemData}/>
                ))}
                <button className="cart__btn" style={{display: cartItems.length === 0 ? 'none' : ""}}>Checkout</button>

                <p className="cart__empty-msg" style={{display: cartItems.length === 0 ? '' : "none"}}>Your cart is empty.</p>
            </div>
        </>
    )
}

export default Cart;