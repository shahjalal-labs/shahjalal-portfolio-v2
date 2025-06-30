// hooks/useScrollPosition.js
import { useState, useEffect } from "react";

const useScrollPosition = (offset = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
};

export default useScrollPosition;
