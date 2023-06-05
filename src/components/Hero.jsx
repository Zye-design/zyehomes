import React from "react";
import styles from "../style";
import { HiLocationMarker } from "react-icons/hi";
import Landing from "../assets/image-5.jpg";
import Stats from "./Stats";
import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col mb-0 pt-2 md:mt-0 mt-8 pb-0 ${styles.heroWrapper}`}
  >
    <div
      className={`${styles.heroContainer} ${styles.primaryText} ${styles.innerWidth} sm:px-16 px-6 pb-0 mb-0 ${styles.flexCenter}`}
    >
      {/* IMAGE SECTION */}
      <div className={`${styles.heroRight} ${styles.flexCenter} `}>
        <motion.div
          initial={{ x: "12rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ x: 2, type: "spring" }}
          className={`border1 radius15 imageContainer  md:absolute relative md:top-[5rem] top-[0] md:right-[55%] right-[0] md:z-4 z-0 md:shadow-[8px solid rgba(255, 255, 255, .12)] shadow-none`}
        >
          <img src={Landing} alt="landing img" />
        </motion.div>
      </div>

      <div
        className={`${styles.heroLeft} ${styles.flexColStart} md:pt-10 pt-3`}
      >
        <div className={`${styles.heroTitle}`}>
          <div className={`${styles.purpleCircle}`} />
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="text-white font-semibold md:text-6xl text-3xl"
          >
            DISCOVER <br className="sm:block hidden" />{" "}
            <span className="text-gradient-blue">THE MOST SUITABLE</span> <br />{" "}
            PROPERTY TODAY
          </motion.h1>
        </div>
        <div className={`heroDes ${styles.flexColStart}`}>
          <span className={`${styles.secondaryText}`}>
            Find a variety of properties that suit you very easily,
          </span>
          <span className={`${styles.secondaryText}`}>
            forget at difficulties in finding a residence for you
          </span>
        </div>

        <div
          className={`border2 hero-search padding1 ${styles.searchBar} ${styles.flexCenter} md:z-10 z-0 md:w-[50%] w-full md:absolute relative md:right-[8%] right-0 md:top-[22rem] top-0`}
        >
          <div className="flex">
            <HiLocationMarker color="primaryColor" size={25} />

            <input
              className={`${styles.secondaryText} sm:text-xl text-[.75rem] ${styles.inputbox1} mx-1.5 truncate`}
              type="text"
              placeholder="Search by location, Type, Budget"
            />
          </div>

          <button className="button ">Search</button>
        </div>

        <div className={`${styles.flexColStart}`}>
          <Stats />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
