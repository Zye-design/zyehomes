import React from "react";
import styles from "../style";
import Service from "../assets/service.png";
import { CgRadioChecked } from "react-icons/cg";

const Services = () => {
  return (
    <section className="v-wrapper md:mt-0 mt-8" id="services">
      <div
        className={`v-container ${styles.padding} ${styles.innerWidth} md:flex block md:justify-center justify-around items-center gap-y-8 flex-wrap `}
      >
        {/* content side */}

        <div className={`v-right  ${styles.flexColStart}  md:order-2 order-1 `}>
          <span className={`${styles.orangeText} pb-2 uppercase`}>
            <span className={`${styles.primaryText} text-[1.8rem] mr-2`}>
              |
            </span>
            our service
          </span>
          <span className={`${styles.primaryText} pb-3 `}>
            Comfort is our <br /> Top priority for you
          </span>
          <span className={`${styles.secondaryText} pb-4`}>
            we are always ready to help by providing the best service for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <div
            className={`s-bullet  m-0 p-0 pb-3 flex flex-col md:justify-center justify-start font-semibold`}
          >
            <div className={`flex justify-start md:items-center  items-start `}>
              <span className="s-radio">
                <CgRadioChecked size={20} />
              </span>
              <span className={`${styles.secondaryText} text-blue-900 pl-2 `}>
                Premium national marketing
              </span>
            </div>
            <div
              className={`flex  justify-start md:items-center  items-start `}
            >
              <span className="s-radio">
                <CgRadioChecked size={20} />
              </span>
              <span className={`${styles.secondaryText} text-blue-900 pl-2`}>
                Managed viewing
              </span>
            </div>
            <div className={`flex  justify-start md:items-center  items-start`}>
              <span className="s-radio">
                <CgRadioChecked
                  style={{ fill: "blue-500", stroke: "blue-500" }}
                  size={20}
                />
              </span>
              <span className={`${styles.secondaryText} text-blue-900 pl-2`}>
                Free, no obligation valuations
              </span>
            </div>
            <div
              className={`flex  justify-start md:items-center  items-start `}
            >
              <span className="s-radio">
                <CgRadioChecked size={20} />
              </span>
              <span className={`${styles.secondaryText} text-blue-900 pl-2`}>
                Local area knowledge
              </span>
            </div>
          </div>

          <div
            className={`s-button flex justify-start md:items-center items-start}`}
          >
            <button className="button capitalize"> see more</button>
          </div>
        </div>

        {/* image side */}
        <div
          className={`v-left  ${styles.flexStart} md:order-1 order-2 md:mt-0 mt-12 `}
        >
          <div className="imageContainer">
            <img src={Service} alt="our service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
