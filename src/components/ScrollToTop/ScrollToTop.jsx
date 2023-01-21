import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="fixed bottom-5 right-6 text-4xl border border-myBlue hover:bg-myBlue hover:text-myBgDark hover:border-white cursor-pointer transition ease-in duration-300 delay-100 rounded-full p-2 drop-shadow-lg shadow-myGray animate-bounce"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop