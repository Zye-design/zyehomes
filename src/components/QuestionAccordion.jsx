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
import { frequentQuestions } from "../constants";

function QuestionAccordion() {
  const [expanded, setExpanded] = useState([1]);
  return (
    <Accordion
      className="accordion"
      allowMultipleExpanded={false}
      preExpanded={[1]}
    >
      {frequentQuestions.map((item, i) => {
        return (
          <AccordionItem
            className={`accordionItem mt-0 ${expanded}`}
            key={i}
            uuid={i}
          >
            <AccordionItemHeading className="accordion-heading">
              <AccordionItemButton
                onClick={() => setExpanded(item)}
                className={`justify-between p-4 bg-white w-full cursor-pointer ${
                  styles.flexCenter
                }  ${expanded === item && "expanded"}`}
              >
                <span
                  className={`text-primaryT font-bold md:text-lg text-[.8rem]  `}
                >
                  {item.title}
                </span>
                <div className={`${styles.flexCenter} icon `}>{item.icon}</div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className={`text-secondaryT md:text-xl text-sm`}>
                {item.content}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default QuestionAccordion;
