import AddToCart from './AddToCart';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';

function Article() {
    return (
        <>
            <div className="article">
                <div className="article__img_container">
                    <button className="article__arrow article__arrow--left"><img className="article__arrow-icon" src={IconPrevious} alt="Previous image" /></button>
                    <img className="article__img" src="img/image-product-1.jpg" alt="" />
                    <button className="article__arrow article__arrow--right"><img className="article__arrow-icon" src={IconNext} alt="Next image" /></button>
                </div>

                <div className="article__body">
                    <h4 className="article__brand">SNEAKER COMPANY</h4>
                    <h3 className="article__title">Fall Limited Edition Sneakers</h3>
                    <p className="article__description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <p className="article__price">100 SEK
                        <span className="article__discount">50%</span>
                        <span className="article__original-price">200 SEK</span>
                    </p>

                    <AddToCart />
                </div>
            </div>
        </>
    )
}

export default Article;