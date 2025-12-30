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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Detect if source is a video file
  const isVideo = (src: string) => {
    return /\.(mp4|webm|mov|avi|mkv)$/i.test(src);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsVideoPlaying(false);
    
    // Reset the interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Check if new slide is a video
    if (isVideo(images[index])) {
      // Don't start auto-scroll for videos
      return;
    }
    
    // Restart auto-scroll for images
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

  // Handle video end
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    goToNext();
  };

  // Handle video play
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    const currentSrc = images[currentIndex];
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // If current item is a video, don't start auto-scroll
    if (isVideo(currentSrc)) {
      setIsVideoPlaying(true);
      return;
    }

    // Auto-scroll functionality for images
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, images, autoScrollInterval]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Media Container with smooth transition */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => {
          const video = isVideo(src);
          
          return (
            <div key={index} className="min-w-full h-full flex-shrink-0 relative">
              {video ? (
                <video
                  ref={index === currentIndex ? videoRef : null}
                  src={src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                  onPlay={handleVideoPlay}
                />
              ) : (
                <img
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Previous"
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
            aria-label="Next"
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
