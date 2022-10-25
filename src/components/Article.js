import AddToCart from './AddToCart';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';

function Article({ articleData }) {
    return (
        <>
            <div className="article">
                <div className="article__img_container">
                    <button className="article__arrow article__arrow--left"><img className="article__arrow-icon" src={IconPrevious} alt="Previous image" /></button>
                    <img className="article__img" src={articleData.images[0].image} alt="" />
                    <button className="article__arrow article__arrow--right"><img className="article__arrow-icon" src={IconNext} alt="Next image" /></button>
                </div>

                <div className="article__body">
                    <h4 className="article__brand">{articleData.brand}</h4>
                    <h3 className="article__title">{articleData.title}</h3>
                    <p className="article__description">{articleData.description}</p>

                    <p className="article__price">{articleData.price} SEK
                        <span className="article__discount">{((articleData.originalPrice - articleData.price) * 100 / articleData.originalPrice).toFixed()}%</span>
                        <span className="article__original-price">{articleData.originalPrice} SEK</span>
                    </p>

                    <AddToCart />
                </div>
            </div>
        </>
    )
}

export default Article;