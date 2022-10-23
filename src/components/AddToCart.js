import IconPlus from '../img/icon-plus.svg';
import IconMinus from '../img/icon-minus.svg';

function AddToCart() {
    return (
        <>
            <div className="add_to_cart">
                <button className="add_to_cart__minus"><img src={IconMinus} alt="Minus icon" /></button>
                <input type="number" value="0" />
                <button className="add_to_cart__plus"><img src={IconPlus} alt="Plus icon" /></button>

                <button className="add_to_cart__btn">Add to cart</button>
            </div>
        </>
    )
}

export default AddToCart;