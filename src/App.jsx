import { useState, useEffect } from "react";
import styles from "./style";

import {
  Blog,
  Business,
  Value,
  Clients,
  Questions,
  Footer,
  Services,
  Navbar,
  Testimonials,
  Hero,
} from "./components";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        console.log(window.scrollY);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* gradient start */}
      <div className="absolute z-[0] w-[12rem] h-[12rem] top-0 light-gradient" />
      <div className="absolute z-[1] w-[20rem] h-[20rem] rounded-full  bottom-40 white__gradient" />
      <div className="absolute rounded-full z-[0] w-[14rem] h-[14rem] left-20 bottom-50 blue-gradient" />
      {/* gradient end */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar isTopOfPage={isTopOfPage} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-secondary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Business />
          <Services />
          <Value />
          <Blog />
          <Testimonials />
          <Questions />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
