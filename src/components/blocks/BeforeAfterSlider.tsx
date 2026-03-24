"use client";

import { useRef, useState } from "react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    let clientX = "touches" in event ? event.touches[0].clientX : event.clientX;

    const x = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
    const percent = Math.max(0, Math.min((x / containerRect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const beforeImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"; // Imagine a bad smile here
  const afterImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"; // Perfect smile here

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-800 dark:bg-primary-950/70 dark:text-primary-200">
          Smile Transformations
        </span>
        <h2 data-aos="fade-up" className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Clinical Excellence, Visualized.
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Drag the slider to see the transformative power of our restorative procedures.
        </p>

        <div 
          data-aos="zoom-in"
          data-aos-duration="1000"
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <img 
            src={afterImage} 
            alt="After treatment" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

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

          <div 
            className="absolute top-0 bottom-0 flex w-1 cursor-ew-resize items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <svg className="h-5 w-5 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
