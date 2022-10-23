import CartItem from './CartItem';

function Cart() {
    return (
        <>
            <div className="cart">
                <h3 className="cart__title">Cart</h3>
                <CartItem />
                <button className="cart__btn">Checkout</button>
            </div>
        </>
    )
}

export default Cart;