import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import { trophiesList } from '../constants/trophiesFile';
import NextArrow from '../components/NextArrow';
import PrevArrow from '../components/PrevArrow';
import TrophyDescription from '../components/TrophyDescription';
import trophiesWallpaper from '../assets/trophiesWallpaper.png';

import Navbar from '../components/Navbar';

const Trophies = () => {
  const [imageIndex, setImageIndex] = useState(0);

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
    {/* <Navbar/> */}
    <div className="trophies-page" style={{ backgroundImage: `url(${trophiesWallpaper})` }}>
     
      <Carousel imageIndex={imageIndex} settings={settings} trophiesList={trophiesList} />
      <TrophyDescription imageIndex={imageIndex} trophiesList={trophiesList} />
    </div>
    </>
  );
};

export default Trophies;
