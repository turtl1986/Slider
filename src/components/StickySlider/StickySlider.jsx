import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css';
import Slide from '../Slide';

import data from '../../data';

const StickySlider = () => {
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [width, setWidth] = useState(1);

  const container = useRef(null);
  const swiperRef = useRef(null);

  const params = {
    slidesPerView: 3,
  };

  useEffect(() => {
    if (container.current) {
      const parent = container.current.parentElement;
      setOffsetLeft(parent.offsetLeft);
      setWidth(parent.offsetWidth);
    }
  }, [container.current]);

   return (
    <div ref={container}>
      <Swiper ref={swiperRef} {...params}>
        {data.map((item, idx) => (
          <div key={idx}>
            <Slide
              translate={translate}
              transition={transition}
              color={item.color}
            >
              {item.title}
            </Slide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default StickySlider;