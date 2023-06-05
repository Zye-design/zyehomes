import React from "react";

import "react-accessible-accordion/dist/fancy-example.css";

import styles from "../style";
import QuestionAccordion from "./QuestionAccordion";

const Questions = () => {
  return (
    <section className="v-wrapper mt-0 " id="contactUs">
      <div
        className={`v-container ${styles.padding} ${styles.innerWidth} flex`}
      >
        {/* Headings */}
        <div
          className={`small-head md:justify-between justify-center items-center `}
        >
          <div
            className={`flex flex-col sm:items-start items-center justify-center gap-4`}
          >
            <span className={`${styles.orangeText} uppercase`}>
              <span className={`${styles.primaryText} text-[1.8rem]`}>|</span>{" "}
              Question
            </span>
            <span className={`${styles.primaryText}`}>
              Frequently asked <br /> Questions
            </span>
          </div>
          <div className="mt-4">
            <span className={`${styles.secondaryText}`}>
              Home sales about to surge? we may <br /> see a summer like never
              before
            </span>
          </div>
          <div className={`s-button ${styles.flexStart} mt-6`}>
            <button className="button capitalize"> see more</button>
          </div>
        </div>

        {/* Content */}
        <QuestionAccordion />
      </div>
    </section>
  );
};

export default Questions;
