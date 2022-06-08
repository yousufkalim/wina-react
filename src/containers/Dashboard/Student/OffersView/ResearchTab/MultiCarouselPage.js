import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import CarosoulCard from "./CarosoulCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel3";

//  react carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div style={{ marginLeft: "0.5rem" }} onClick={onClick}>
      <BsChevronRight style={{ fontSize: "2rem" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div style={{ marginRight: "0.5rem" }} onClick={onClick}>
      <BsChevronLeft style={{ fontSize: "2rem" }} />
    </div>
  );
}

export default function MultiCarouselPage(props) {
  const store = useSelector((state) => state.student);
  let JOBS = store.jobs && store.jobs;
  const [isGoDetail, setIsGoDetail] = useState(false);
  const options = {
    loop: true,
    nav: true,
    margin: 80,
    items: 3,
    dots: false,
    //   autoplayTimeout: 2000,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
    autoplay: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 30,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    setIsGoDetail(false);
  }, []);
  return (
    <>
      <div
        className="d-flex justify-content-start align-items-center"
        // style={{ height: "10%" }}
      >
        {/* <h5>Store & Supply </h5> */}
        <span className="offer-apply-btn ml-4">Postuler</span>
      </div>
      {JOBS && JOBS.length > 2 ? (
        <div className="multiCarosoul">
          <div className="student-slider-container">
            <Carousel
              autoPlay={true}
              interval={3000}
              transitionTime={2000}
              centerSlidePercentage={33.34}
              infiniteLoop={true}
              centerMode={true}
              showArrows={true}
            >
              {JOBS &&
                JOBS.map((card, index) => (
                  <CarosoulCard handleDetail={props.handleDetail} cards={card} key={index} name="this is first" />
                ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div>Aucune offre disponible</div>
      )}
    </>
  );
}

