import { useState } from 'react';
import IconPrevious from '../img/icon-previous.svg';
import IconNext from '../img/icon-next.svg';
import IconClose from '../img/icon-close.svg';
import { ArticleImage } from './Articles';

function ImageSlider({ images }: { images: ArticleImage[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const disablePreviousImageButton = activeImage === 0;
  const disableNextImageButton = images.length === activeImage + 1;

  function nextImage(event: React.MouseEvent) {
    setActiveImage((currActiveImage) => currActiveImage + 1);
    event.stopPropagation();
  }

  function previousImage(event: React.MouseEvent) {
    setActiveImage((currActiveImage) => currActiveImage - 1);
    event.stopPropagation();
  }

  function changeActiveImage(event: React.MouseEvent, i: number) {
    setActiveImage(i);
    event.stopPropagation();
  }

  function closeLightbox(event: React.MouseEvent) {
    setLightboxVisible(false);
    event.stopPropagation();
  }
  function openLightbox(event: React.MouseEvent) {
    setLightboxVisible(true);
    event.stopPropagation();
  }

  return (
    <>
      <div className="image-slider">
        <div
          className={lightboxVisible ? 'lightbox' : ''}
          onClick={closeLightbox}
        >
          <div className="image-slider__btn-container">
            <button className="image-slider__close" onClick={closeLightbox}>
              <img
                className="image-slider__close-icon"
                src={IconClose}
                alt="Close lightbox"
              />
            </button>

            <button
              className="image-slider__arrow image-slider__arrow--left"
              onClick={previousImage}
              disabled={disablePreviousImageButton}
            >
              <img
                className="image-slider__arrow-icon"
                src={IconPrevious}
                alt="Previous image"
              />
            </button>

            <button
              className="image-slider__arrow image-slider__arrow--right"
              onClick={nextImage}
              disabled={disableNextImageButton}
            >
              <img
                className="image-slider__arrow-icon"
                src={IconNext}
                alt="Next image"
              />
            </button>

            <div
              className="image-slider__image-container"
              onClick={openLightbox}
            >
              {images.map((image) => (
                <img
                  key={image._id}
                  className="image-slider__img"
                  style={{ translate: activeImage * -100 + '%' }}
                  src={image.imageURL}
                  alt="Article image"
                />
              ))}
            </div>
          </div>

          <div
            className="image-slider__thumbnails"
            style={{ display: images.length === 1 ? 'none' : '' }}
          >
            {images.map((image, i) => (
              <div
                key={image._id}
                className="image-slider__thumbnail-container"
              >
                <img
                  className={
                    'image-slider__thumbnail ' +
                    (activeImage === i ? 'image-slider__thumbnail--active' : '')
                  }
                  onClick={(e) => changeActiveImage(e, i)}
                  src={image.thumbnail}
                  alt="Thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
