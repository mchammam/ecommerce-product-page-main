import IconDelete from '../img/icon-delete.svg';

function CartItem() {
    return (
        <>
        <div className="cart_item">
            <img className="cart_item__thumbnail" src="img/image-product-1-thumbnail.jpg" alt="Thumbnail" />
            <p className="cart_item__title">Title</p>
            <p className="cart_item__price">100 SEK x 3 <span className="cart_item__total">300 SEK</span></p>
        </div>
        </>
    )
}

export default CartItem;