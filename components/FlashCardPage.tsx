import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FlashCard from "./FlashCard"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/FlashCard.css"
import { DataProp, GetData } from "@/app/(server)/api";
import { toast } from "react-toastify";

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
    try {
      const data = await GetData(); 
    setinitialData(data);
    } catch (error) {
      toast.error("Could Not Connect With DataBase")
    }
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
