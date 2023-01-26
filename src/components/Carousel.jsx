import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function CarouselItem({children, width}) {
  return (
    <div className="carousel-item" style={{width: width}}>
      {children}
    </div>
  )
}

function Carousel ({children}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) -1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div className="carousel" {...handlers}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: "100%" })
        })}
      </div>
      <div className="indicators">
        <button onClick={() => {updateIndex(activeIndex -1)}}>
          <FontAwesomeIcon icon={faChevronLeft} className="chevron"/>
        </button>
        <button onClick={() => {updateIndex(activeIndex +1)}}>
          <FontAwesomeIcon icon={faChevronRight} className="chevron"/>
        </button>
      </div>
    </div>
  )
}

export default Carousel;
