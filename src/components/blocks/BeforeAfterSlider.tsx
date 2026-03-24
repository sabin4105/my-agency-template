"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Calculate position based on mouse or touch
    let clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    const x = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
    const percent = Math.max(0, Math.min((x / containerRect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // Placeholder images - you will swap these later
  const beforeImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"; // Imagine a bad smile here
  const afterImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"; // Perfect smile here

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Clinical Excellence, Visualized.
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Drag the slider to see the transformative power of our restorative procedures.
        </p>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Base Image (After) */}
          <img 
            src={afterImage} 
            alt="After treatment" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Overlay Image (Before) with Clip Path */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={beforeImage} 
              alt="Before treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-80" 
            />
          </div>

          {/* The Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}