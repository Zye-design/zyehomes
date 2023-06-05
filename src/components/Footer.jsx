import React from "react";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import logo from "../assets/Group54.png";
const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} bg-black flex-col`}
  >
    <div
      className={`${styles.flexStart}  md:flex-row flex-col mb-8 w-full px-8`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="B.homes"
          className="w-[186px] h-[60.14px] object-contain"
        />
        <p
          className={`${styles.paragraph} ${styles.secondaryText} mt-4 max-w-[312px]`}
        >
          We have a proven system way to make our homes stand out in the market
          with payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] ${
                    styles.secondaryText
                  } hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
      <div className="px-8 w-full flex justify-between items-center md:flex-row flex-col">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022{" "}
          <span>
            <a
              href="https://zye-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              {" "}
              Zye Design{" "}
            </a>
          </span>
          . All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <div
              key={social.id}
              className={`p-2 icon bg-[#eeeeff] rounded-full cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
