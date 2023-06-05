import React from "react";
import styles from "../style";
import { useSwiper } from "swiper/react";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div
      className={`b-button sm:absolute relative ${styles.flexCenter} gap-4 sm:top-[-4rem] top-0 sm:right-1 right-0`}
    >
      <span className={`${styles.secondaryText} hide`}>Explore All</span>
      <button onClick={() => swiper.slidePrev()}>
        <IoArrowBackCircleOutline size={25} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <IoArrowForwardCircleOutline size={25} />{" "}
      </button>
    </div>
  );
};

export default SliderButtons;
