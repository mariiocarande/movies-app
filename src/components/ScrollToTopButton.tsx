import React, { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi2";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          data-testid="scroll-to-top-button"
          className="fixed bottom-5 right-5 z-10 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900"
          onClick={scrollToTop}
        >
          <HiChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
