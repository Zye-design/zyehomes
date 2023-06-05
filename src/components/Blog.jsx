import React from "react";
import styles from "../style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { blogData, sliderSettings } from "../constants";
import SliderButtons from "./sliderSettings";

const Blog = () => {
  return (
    <section className="v-wrapper" id="blog">
      <div
        className={`v-container ${styles.padding} ${styles.innerWidth} ${styles.flexCenter}`}
      >
        {/* Headings */}
        <div
          className={`flex md:justify-between justify-start gap-y-8 flex-wrap`}
        >
          <div className={`flex flex-col items-start justify-center`}>
            <span className={`${styles.orangeText} uppercase`}>
              <span className={`${styles.primaryText} text-[1.8rem]`}>|</span>{" "}
              Our Blog
            </span>
            <span className={`${styles.primaryText}`}>
              Latest housing <br /> Information
            </span>
          </div>
          <div>
            <span className={`${styles.secondaryText}`}>
              we are always ready to help by providing the best service for you.
              <br />
              We believe a good place to live can make your life better <br />{" "}
              and outstanding.
            </span>
          </div>
          <div className={`s-button ${styles.flexStart} `}>
            <button className="button capitalize md:block hidden">
              {" "}
              see more
            </button>
          </div>
        </div>
      </div>

      {/* content */}
      <Swiper className="!justify-between !mx-5" {...sliderSettings}>
        {blogData.map((card, i) => (
          <SwiperSlide key={i}>
            <div
              className={`${styles.flexColStart} justify-between px-4 mx-4 b-card `}
            >
              <img
                src={card.img}
                className="w-full max-w-sm bg-contain rounded-t-2xl"
                alt="home"
              />

              <div className={`location ${styles.flexCenter} pt-1`}>
                <span className={`${styles.primaryText} mb-5`}>.</span>
                <span className={`${styles.secondaryText} text-[1rem] pl-2`}>
                  {card.date}
                </span>
              </div>

              <span
                className={`card-title ${styles.secondaryText} text-md capitalize`}
              >
                {card.detail}
              </span>

              <div className={`s-button ${styles.flexStart} mt-6 `}>
                <button className="blog-button w-full capitalize">
                  {" "}
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="blogButton md:mt-0 mt-12 ms:hidden block">
          {" "}
          <SliderButtons />
        </div>
      </Swiper>
    </section>
  );
};

export default Blog;
