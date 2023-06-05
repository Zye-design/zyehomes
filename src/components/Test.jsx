import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import styles from "../style";
import { values } from "../constants";

function Test() {
  const [expanded, setExpanded] = useState([null]);
  return (
    <Accordion
      className="accordion"
      allowMultipleExpanded={false}
      preExpanded={[1]}
    >
      {values.map((item, i) => {
        return (
          <AccordionItem
            className={`accordionItem ${expanded}`}
            key={i}
            uuid={i}
          >
            <AccordionItemHeading className="accordion-heading">
              <AccordionItemButton
                onClick={() => setExpanded(item)}
                className={`justify-between accordion-button p-4 bg-white w-full cursor-pointer ${
                  styles.flexCenter
                }  ${expanded === item && "expanded"}`}
              >
                <div className={`${styles.flexCenter} icon`}>{item.icon}</div>
                <span
                  className={`text-primaryT font-bold  md:text-lg text-[.8rem]`}
                >
                  {item.title}
                </span>
                <div className={`${styles.flexCenter} icon`}> {item.gif} </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className={`${styles.secondaryText}`}>{item.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default Test;
