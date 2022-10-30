import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import IconPlus from '../img/icon-plus.svg';
import IconMinus from '../img/icon-minus.svg';

function AddToCart({ articleData }) {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const item = { "id": articleData.id, "title": articleData.title, "price": articleData.price, "thumbnail": articleData.images[0].thumbnail };
    return (
        <>
            <div className="add-to-cart">
                <div className="add-to-cart__input-container">
                    <button className="add-to-cart__input-btn" onClick={() => { setQuantity((quantity > 1) ? (quantity - 1) : quantity) }}><img src={IconMinus} alt="Minus icon" /></button>
                    <input className="add-to-cart__input" type="number" value={quantity} />
                    <button  className="add-to-cart__input-btn" onClick={() => { setQuantity(quantity + 1) }}><img src={IconPlus} alt="Plus icon" /></button>
                </div>

                <button className="add-to-cart__btn" onClick={() => (addToCart({ ...item, quantity: quantity }))}>
                    <svg class="add-to-cart__icon" alt="Cart icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
                    Add to cart
                </button>
            </div>
        </>
    )
}

export default AddToCart;