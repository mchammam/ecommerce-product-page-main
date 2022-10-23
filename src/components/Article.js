import AddToCart from './AddToCart';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';

function Article() {
    return (
        <>
            <div className="article">
                <div className="article__img_container">
                    <button className="article__arrow_previous"><img src={IconPrevious} alt="Previous image" /></button>
                    <img className="article__img" src="img/image-product-1.jpg" alt="" />
                    <button className="article__arrow_next"><img src={IconNext} alt="Next image" /></button>
                </div>

                <h4 className="article__brand">Brand name</h4>
                <h3 className="article__title">Title</h3>
                <p className="article__description">Description</p>

                <p className="article__price">100 SEK<span className="article__discount">50%</span></p>
                <p className="article__original_price">200 SEK</p>

                <AddToCart />
            </div>
        </>
    )
}

export default Article;