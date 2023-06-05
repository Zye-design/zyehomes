import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className={`${styles.flexCenter} sm:mb-20 mb-2 md:pt-20 pt-0`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`justify-between items-center m-3 ${styles.flexColCenter}`}
      >
        <img key={stat.id} src={stat.img} alt={stat.title} />

        <h4 className="font-poppins font-semibold xs:text-[2rem] text-[1.5rem] xs:leading-[53.16px] leading-[43.16px] text-gradient-blue">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[1.2rem] text-[.9rem] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
