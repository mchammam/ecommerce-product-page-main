import CartItem from './CartItem';

function Cart({open}) {
    return (
        <>
            <div className={"cart " + (open ? "cart--open" : "")}>
                <h3 className="cart__title">Cart</h3>
                
                <CartItem />
                <button className="cart__btn">Checkout</button>

                <p className="cart__empty-msg">Your cart is empty.</p>
            </div>
        </>
    )
}

export default Cart;