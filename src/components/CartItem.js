import IconDelete from '../img/icon-delete.svg';

function CartItem() {
    return (
        <>
            <div className="cart-item">
                <img className="cart-item__thumbnail" src="img/image-product-1-thumbnail.jpg" alt="Thumbnail" />
                <div className="cart-item__text">
                    <p className="cart-item__title">Autumn Limited Edition Sneakers</p>
                    <p className="cart-item__price">100 SEK x 3 <span className="cart-item__total">300 SEK</span></p>
                </div>
                <img className="cart-item__icon-delete" src={IconDelete} alt="Delete item" />
            </div>
        </>
    )
}

export default CartItem;