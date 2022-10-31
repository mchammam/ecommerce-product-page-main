import { useState, useMemo } from 'react';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';
import IconClose from '../img/icon-close.svg';

function ImageSlider({ images }) {
    const [activeImage, setActiveImage] = useState(0);
    const [nextImageButtonDisabled, setNextImageButtonDisabled] = useState(true);
    const [previousImageButtonDisabled, setPreviousImageButtonDisabled] = useState(true);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    function nextImage(event) {
        setActiveImage((currActiveImage) => (
            currActiveImage + 1
        ))
        event.stopPropagation();
    }

    function previousImage(event) {
        setActiveImage((currActiveImage) => (
            currActiveImage - 1
        ))
        event.stopPropagation();
    }

    function changeActiveImage(event, i) {
        setActiveImage(i)
        event.stopPropagation();
    }

    function closeLightbox(event) {
        setLightboxVisible(false)
        event.stopPropagation();
    }
    function openLightbox(event) {
        setLightboxVisible(true);
        event.stopPropagation();
    }

    useMemo(() => {
        if (activeImage === 0) {
            setPreviousImageButtonDisabled(true)
        } else {
            setPreviousImageButtonDisabled(false)
        }

        if ((images.length - 1) === activeImage) {
            setNextImageButtonDisabled(true)
        } else {
            setNextImageButtonDisabled(false)
        }

    }, [activeImage])

    return (
        <>
            <div className={"image-slider "}>
                <div className={((lightboxVisible) ? "lightbox" : "")} onClick={closeLightbox}>
                    <div className="image-slider__btn-container">

                        <button
                            className="image-slider__close"
                            onClick={closeLightbox}>
                            <img className="image-slider__close-icon" src={IconClose} alt="Close lightbox" />
                        </button>

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

                        <div className="image-slider__image-container" onClick={openLightbox}>
                            {images.map((image, i) => (
                                <img
                                    className="image-slider__img"
                                    style={{ translate: (activeImage * (-100)) + "%" }}
                                    src={image.imageURL}
                                    alt="Article image" />
                            ))}
                        </div>
                    </div>

                    <div className="image-slider__thumbnails"
                        style={{ display: ((images.length === 1) ? "none" : "") }} >
                        {images.map((image, i) => (
                            <div className="image-slider__thumbnail-container">
                                <img className={"image-slider__thumbnail " + (activeImage === i ? "image-slider__thumbnail--active" : "")}
                                    onClick={(e) => (changeActiveImage(e, i))}
                                    src={image.thumbnail}
                                    alt="Thumbnail" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ImageSlider;