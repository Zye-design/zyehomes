import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { residence, sliderSettings } from "../constants";
import styles from "../style";
import { HiLocationMarker } from "react-icons/hi";
import bed from "../assets/carVec.png";
import square from "../assets/boxVec.png";
import BlackBackground from "./BlackBackground";
import SliderButtons from "./sliderSettings";

const Business = () => (
  <section className="b-wrapper" id="product">
    <div
      className={`b-container relative z-0 overflow-hidden ${styles.innerWidth}`}
    >
      <div className={`${styles.flexColStart} ${styles.paddingX} b-head`}>
        <span className={`${styles.orangeText}  uppercase`}>
          <span className={`${styles.primaryText} text-[1.8rem]`}>|</span>{" "}
          Popular
        </span>
        <span className={`${styles.primaryText} sm:ml-0 ml-16`}>
          {" "}
          Our Popular Residencies
        </span>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        <BlackBackground />
        {residence.map((card, i) => (
          <SwiperSlide key={i}>
            <div className={`${styles.flexColStart} b-card `}>
              <img
                src={card.img}
                className="w-full max-w-xs bg-contain rounded-t-2xl"
                alt="home"
              />

              <div className="location pt-1">
                <span>
                  <HiLocationMarker color="primaryColor" size={25} />
                </span>
                <span className="text-[1rem] w-[15rem] pl-2 truncate text-black">
                  {card.detail}
                </span>
              </div>

              <span className="text-2xl text-primaryT font-semibold capitalize">
                {card.name}
              </span>

              <div className={`b-des flex-row`}>
                <div className="b-flex">
                  <img src={bed} alt="bed" />
                  <span className="text-sm pr-1 text-black">4 bed</span>
                </div>
                <div className="b-flex">
                  <img src={square} alt="square" className="ml-10" />
                  <span className="text-sm text-black">10X10</span>
                </div>
              </div>
              <span
                className={`${styles.secondaryText} b-price font-semibold text-xl `}
              >
                <span>
                  {" "}
                  <button className="button uppercase">book now</button>
                </span>
                <span
                  className={`${styles.orangeText} xs:leading-[6.58px] leading-[5.58px] pl-4`}
                >
                  $
                </span>
                <span className="text-2xl text-gray-500">{card.price}</span>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Business;
