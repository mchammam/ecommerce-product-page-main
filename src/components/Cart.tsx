import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../context/CartContext';
import useOnCLickOutsideOnce from '../hooks/useOnCLickOutsideOnce';
import CartItem from './CartItem';

function Cart() {
  const { cartIsOpen, setCartIsOpen, cartItems } = useContext(CartContext);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartIsOpen) {
      useOnCLickOutsideOnce(cartRef, handleOnClickOutside);
    }
  }, [cartIsOpen]);

  function handleOnClickOutside() {
    setCartIsOpen(false);
  }

  return (
    <>
      <div className={'cart ' + (cartIsOpen ? 'cart--open' : '')} ref={cartRef}>
        <h3 className="cart__title">Cart</h3>
        {cartItems.map((itemData) => (
          <CartItem key={itemData.id} itemData={itemData} />
        ))}
        <button
          className="cart__btn"
          style={{ display: cartItems.length === 0 ? 'none' : '' }}
        >
          Checkout
        </button>

        <p
          className="cart__empty-msg"
          style={{ display: cartItems.length === 0 ? '' : 'none' }}
        >
          Your cart is empty.
        </p>
      </div>
    </>
  );
}

export default Cart;
