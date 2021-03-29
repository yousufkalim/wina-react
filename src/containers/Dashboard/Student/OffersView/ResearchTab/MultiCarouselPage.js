import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import CarosoulCard from "./CarosoulCard";
import Slider from "react-slick";
import {
  BsChevronRight,
  BsChevronLeft,
  IoLocationSharp,
} from "react-icons/all";
import OfferCardDetail from "./OfferCardDetail";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ marginLeft: "0.5rem" }} onClick={onClick}>
      <BsChevronRight style={{fontSize: "2rem"}} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ marginRight: "0.5rem" }} onClick={onClick}>
      <BsChevronLeft style={{fontSize: "2rem"}} />
    </div>
  );
}

const offerCards = [
  {
    image: "offer-card-1",
    title: "Comundi",
    location: "4 Rue du Général - 75015 Paris",
    content1: "Domaine : Webdesign",
    content2: "Durée : 1 an",
    content3: "Niveau d’étude : Brevet",
  },
  {
    image: "offer-card-1",
    title: "Comundi",
    location: "4 Rue du Général - 75015 Paris",
    content1: "Domaine : Webdesign",
    content2: "Durée : 1 an",
    content3: "Niveau d’étude : Brevet",
  },
  {
    image: "offer-card-1",
    title: "Comundi",
    location: "4 Rue du Général - 75015 Paris",
    content1: "Domaine : Webdesign",
    content2: "Durée : 1 an",
    content3: "Niveau d’étude : Brevet",
  },
  {
    image: "offer-card-1",
    title: "Comundi",
    location: "4 Rue du Général - 75015 Paris",
    content1: "Domaine : Webdesign",
    content2: "Durée : 1 an",
    content3: "Niveau d’étude : Brevet",
  },
  {
    image: "offer-card-1",
    title: "Comundi",
    location: "4 Rue du Général - 75015 Paris",
    content1: "Domaine : Webdesign",
    content2: "Durée : 1 an",
    content3: "Niveau d’étude : Brevet",
  },
  
  
];

export default function MultiCarouselPage(props) {
  const [isGoDetail, setIsGoDetail] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    autoplay: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(
    () => {
      setIsGoDetail(false);
     
      // window.location.reload(false);
    },
    [
      // window.location.reload(false)
    ]
  );

  return (
    <div className="multiCarosoul">
     
        <div className="student-slider-container">
          <Slider {...settings}>
            {offerCards.map((card, index) => (
              <div className="h-100 w-100">
                <CarosoulCard
                  isDetailPage={props.setDetail}
                  cards={card}
                  key={index}
                  name="this is first"
                  style={{ height: "100%" }}
                />
              </div>
            ))}
          </Slider>
        </div>
    
    </div>
  );
}
