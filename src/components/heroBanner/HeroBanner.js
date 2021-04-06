const HeroBanner = () => {
  return (
    <>
      <div className='slider__wrapper'>
        <div className='slider js-slider'>
          <div className='slider__inner js-slider__inner'></div>
          <div className='slide js-slide'>
            <div className='slide__content'>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo1.jpg'
                />
              </figure>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo2.jpg'
                />
              </figure>
            </div>

            <div className='slider__text js-slider__text'>
              <div className='slider__text-line js-slider__text-line'>
                <div>Black is</div>
              </div>
              <div className='slider__text-line js-slider__text-line'>
                <div>timeless. Black is</div>
              </div>
              <div className='slider__text-line js-slider__text-line'>
                <div>the colour of</div>
              </div>
              <div className='slider__text-line js-slider__text-line'>
                <div>Eternity.</div>
              </div>
            </div>
          </div>

          <div className='slide js-slide'>
            <div className='slide__content'>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo3.jpg'
                />
              </figure>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo4.jpg'
                />
              </figure>
            </div>
          </div>

          <div className='slide js-slide'>
            <div className='slide__content'>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo5.jpg'
                />
              </figure>
              <figure className='slide__img js-slide__img'>
                <img
                  alt='hello'
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo6.jpg'
                />
              </figure>
            </div>
          </div>

          <nav className='slider__nav js-slider__nav'>
            <div className='slider-bullet js-slider-bullet'>
              <span className='slider-bullet__text js-slider-bullet__text'>
                01
              </span>
              <span className='slider-bullet__line js-slider-bullet__line'></span>
            </div>
            <div className='slider-bullet js-slider-bullet'>
              <span className='slider-bullet__text js-slider-bullet__text'>
                02
              </span>
              <span className='slider-bullet__line js-slider-bullet__line'></span>
            </div>
            <div className='slider-bullet js-slider-bullet'>
              <span className='slider-bullet__text js-slider-bullet__text'>
                03
              </span>
              <span className='slider-bullet__line js-slider-bullet__line'></span>
            </div>
          </nav>

          <div className='scroll js-scroll'>Scroll</div>
        </div>

        <div className='vert-text'>
          <span>
            Wings+Horns
            <br />X Kyoto Black
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
