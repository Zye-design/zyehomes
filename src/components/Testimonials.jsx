import React from "react";
import styles from "../style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { feedback, feedbackSettings } from "../constants";
import SliderButtons from "./sliderSettings";

const Testimonials = () => {
  return (
    <section className="v-wrapper bg-black mt-20 pb-12" id="aboutUs">
      <div
        className={`v-container ${styles.padding} ${styles.innerWidth} ${styles.flexCenter}`}
      >
        {/* Headings */}
        <div className={`justify-between items-center ${styles.flexCenter}`}>
          <div className={`${styles.flexColStart}`}>
            <span className={`${styles.orangeText} text-white uppercase`}>
              <span
                className={`${styles.primaryText} text-white text-[1.8rem]`}
              >
                |
              </span>{" "}
              Testimonials
            </span>
            <span className={`${styles.primaryText} text-white pt-6`}>
              What Our Customer <br /> Says About Us
            </span>
          </div>
        </div>
      </div>
      {/* Content */}
      <Swiper className=" !mx-5" {...feedbackSettings}>
        {feedback.map((card, i) => (
          <SwiperSlide key={i}>
            <div className={` md:flex block justify-between px-4 mx-4 `}>
              <div className="t-image-container">
                <img
                  src={card.img}
                  className="w-full max-w-[16rem] bg-contain rounded-t-2xl"
                  alt="home"
                />
              </div>
              <div className={` md:ml-10 ml-0 md:pt-0 pt-8 t-content`}>
                <div className={` ${styles.flexStart}`}>
                  <span
                    className={`${styles.primaryText} text-2xl text-white mb-3`}
                  >
                    {card.name}
                  </span>
                </div>
                <div>
                  <span
                    className={`${styles.secondaryText} text-[1rem] md:pl-2 pl-0`}
                  >
                    {card.content}
                  </span>
                </div>
                <div className="mt-2">
                  <span
                    className={`card-title ${styles.secondaryText} text-white text-md capitalize`}
                  >
                    {card.title}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="blogButton md:mt-0 mt-12 sm:hidden block">
          {" "}
          <SliderButtons />
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
