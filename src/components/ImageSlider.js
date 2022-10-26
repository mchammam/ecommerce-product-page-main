import { useRef, useState, useEffect } from 'react';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';

function ImageSlider({ images }) {
    const articleImages = useRef([]);
    const [nextImageButtonDisabled, setNextImageButtonDisabled] = useState(true);
    const [previousImageButtonDisabled, setPreviousImageButtonDisabled] = useState(true);

    //If there is more than one pic enable next btn
    useEffect(() => {
        if (images.length > 1) {
            setNextImageButtonDisabled(false)
        }
    }, [])

    function nextImage() {
        articleImages.current.map((image) => {
            const imageTranslateProp = parseFloat(image.style.translate) || 0;
            image.style.translate = (imageTranslateProp - 100) + "%"
        });

        setPreviousImageButtonDisabled(false);

        //Disable next button if you are showing the last image
        const firstImage = articleImages.current[0];
        const firstImageTranslateProp = parseFloat(firstImage.style.translate);
        if (firstImageTranslateProp === ((articleImages.current.length - 1) * (-100))) {
            setNextImageButtonDisabled(true);
        }
    }

    function previousImage() {
        articleImages.current.map((image) => {
            const imageTranslateProp = parseFloat(image.style.translate) || 0;
            image.style.translate = (imageTranslateProp + 100) + "%"
        });

        setNextImageButtonDisabled(false);

        //Disable previous button if you are showing the first image
        const firstImage = articleImages.current[0];
        const firstImageTranslateProp = parseFloat(firstImage.style.translate);
        if (firstImageTranslateProp === 0) {
            setPreviousImageButtonDisabled(true);
        }
    }

    return (
        <>
            <div className="image-slider">

                {images.map((image, i) => (
                    <img
                        ref={(element) => (
                            articleImages.current[i] = element
                        )}
                        className="image-slider__img"
                        src={image.imageURL}
                        alt="Article image" />
                ))}

                <button
                    className="image-slider__arrow image-slider__arrow--left"
                    onClick={previousImage}
                    disabled={previousImageButtonDisabled}>
                    <img className="image-slider__arrow-icon" src={IconPrevious} alt="Previous image" />
                </button>

                <button
                    className="image-slider__arrow image-slider__arrow--right"
                    onClick={nextImage}
                    disabled={nextImageButtonDisabled}>
                    <img className="image-slider__arrow-icon" src={IconNext} alt="Next image" />
                </button>

            </div>
        </>
    )
}

export default ImageSlider;