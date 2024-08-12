import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FlashCard from "./FlashCard"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../FlashCard.css"
import { DataProp, GetData } from "../(server)/api";

const FlashCardCarousel = () => {
  const [intialData, setinitialData] = useState<DataProp[] | undefined>(undefined);

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerPadding:"0px"
  };

  const handleGet = async () => {
    const data = await GetData(); 
    setinitialData(data);
  }

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto">
      <Slider {...settings}>
        {intialData?.map((eachCard) => (
          <div key={eachCard.id} className="ml-40 flex justify-center items-center m-auto">
            <FlashCard question={eachCard.question} answer={eachCard.answer} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlashCardCarousel;
