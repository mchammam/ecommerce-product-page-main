import ImageSlider from './ImageSlider';
import AddToCart from './AddToCart';


function Article({ articleData }) {

    return (
        <>
            <div className="article">
                <ImageSlider images={articleData.images} />

                <div className="article__body">
                    <h4 className="article__brand">{articleData.brand}</h4>
                    <h3 className="article__title">{articleData.title}</h3>
                    <p className="article__description">{articleData.description}</p>

                    <p className="article__price">{articleData.price} SEK
                        <span className="article__discount">{((articleData.originalPrice - articleData.price) * 100 / articleData.originalPrice).toFixed()}%</span>
                        <span className="article__original-price">{articleData.originalPrice} SEK</span>
                    </p>

                    <AddToCart articleData={articleData} />
                </div>
            </div>
        </>
    )
}

export default Article;