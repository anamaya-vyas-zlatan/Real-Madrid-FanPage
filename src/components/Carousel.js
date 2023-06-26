import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { trophiesList } from '../constants/trophiesFile'
import x from '../assets/logo.png'
import CarouselCard from "./CarouselCard";

function Carousel() {


  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [image, setImage] = useState(trophiesList[0].id)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next), 
  };

  return (
    <>
      <div className="Carousel">
        <Slider {...settings}>
          {trophiesList.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            {/* <div> */}
              {/* <img src={img.logo} alt={img.id} /> */}
              <CarouselCard logo = {img.logo}  name = {img.id} winner = {img.won}/>
              {/* { console.log(imageIndex)} */}

            </div>
          ))}

        </Slider>
      </div>
      {/* <CarouselCard/> */}
    </>
  );
}

export default Carousel;