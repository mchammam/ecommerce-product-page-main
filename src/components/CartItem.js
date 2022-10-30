import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import IconDelete from '../img/icon-delete.svg';

function CartItem({ itemData }) {
    const { deleteFromCart } = useContext(CartContext)
    return (
        <>
            <div className="cart-item">
                <img className="cart-item__thumbnail" src={itemData.thumbnail} alt="Thumbnail" />
                <div className="cart-item__text">
                    <p className="cart-item__title">{itemData.title}</p>
                    <p className="cart-item__price">{itemData.price} SEK x {itemData.quantity} <span className="cart-item__total">{itemData.price * itemData.quantity}  SEK</span></p>
                </div>
                <button className="cart-item__delete-btn" onClick={() => (deleteFromCart(itemData.id))}>
                    <img src={IconDelete} alt="Delete item" />
                </button>
            </div>
        </>
    )
}

export default CartItem;