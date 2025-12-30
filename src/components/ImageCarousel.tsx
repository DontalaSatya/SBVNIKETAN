import { useEffect, useRef, useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoScrollInterval?: number;
}

export default function ImageCarousel({ 
  images, 
  alt, 
  className = '', 
  autoScrollInterval = 3000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-scroll functionality
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, autoScrollInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset the interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);
  };

  const goToPrevious = () => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % images.length);
  };

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Image Container with smooth transition */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

