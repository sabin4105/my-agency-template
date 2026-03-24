"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Smooth, premium timing
      once: true,    // Only animate once per scroll down
      easing: "ease-out-cubic",
      offset: 50,    // Trigger slightly before the element hits the screen
    });
  }, []);

  return null;
}