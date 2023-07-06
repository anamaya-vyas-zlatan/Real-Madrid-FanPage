import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

function Carousel({ imageIndex, settings, trophiesList }) {

  return (
    <div className="CarouselContainer">
      <div className="Carousel">
        <Slider {...settings}>
          {trophiesList.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <CarouselCard logo={img.logo} name={img.name} winner={img.won} />
            </div>

          ))}

        </Slider>
      </div>
    </div>
  );
}

export default Carousel;