import React from "react";

import styles from "../style";
import value from "../assets/value.png";
import Test from "./Test";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div
        className={`v-container ${styles.padding} ${styles.innerWidth} ${styles.flexCenter}`}
      >
        {/* image side */}
        <div className={`v-left order-2 ${styles.flexEnd}`}>
          <div className="imageContainer">
            <img src={value} alt="our value" />
          </div>
        </div>
        {/* content side */}
        <div className={`v-right ${styles.flexColStart}`}>
          <span className={`${styles.orangeText} uppercase`}>
            <span className={`${styles.primaryText} text-[1.8rem]`}>|</span> Our
            Value
          </span>
          <span className={`${styles.primaryText}`}>Value we give to you</span>
          <span className={`${styles.secondaryText}`}>
            we are always ready to help by providing the best service for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <Test />
        </div>
      </div>
    </section>
  );
};

export default Value;
