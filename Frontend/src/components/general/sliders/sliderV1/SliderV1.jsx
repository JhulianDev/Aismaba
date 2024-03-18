import React from 'react';
import { BoxCircles, Circle, Filter, MovilSlider, TouchSlider, WindowSlider } from './SliderV1Styles';
import useSliderV1 from './useSliderV1';

const SliderV1 = ({ children }) => {
  const { cardSelected, handleCircles, handleTouchStart, handleTouchEnd } = useSliderV1();
  return (
    <>
      <WindowSlider>
        <MovilSlider $cardSelected={cardSelected}>
          {children}
        </MovilSlider>
        <TouchSlider onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
        <Filter $left />
        <Filter $right />
      </WindowSlider>

      <BoxCircles>
        <Circle onClick={() => { handleCircles(1) }} $selected={cardSelected === 1} />
        <Circle onClick={() => { handleCircles(2) }} $selected={cardSelected === 2} />
        <Circle onClick={() => { handleCircles(3) }} $selected={cardSelected === 3} />
      </BoxCircles>
    </>
  );
};

export default SliderV1;