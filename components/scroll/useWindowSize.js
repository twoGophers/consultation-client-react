import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height,
        };
      }
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
