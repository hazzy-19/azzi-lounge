import { useEffect, useRef, useState } from 'react';
import { PlayCircle } from 'lucide-react';

export default function VideoPreview({ 
  src, 
  isActive, 
  onBecomeActive, 
  onBecomeInactive 
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [localActive, setLocalActive] = useState(false);

  // Use provided isActive if it exists, otherwise use local state
  const isCurrentlyActive = isActive !== undefined ? isActive : localActive;

  // Handle Intersection Observer for this video
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (onBecomeActive) onBecomeActive();
            if (isActive === undefined) setLocalActive(true);
          } else {
            if (isCurrentlyActive && onBecomeInactive) onBecomeInactive();
            if (isActive === undefined) setLocalActive(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [isActive, isCurrentlyActive, onBecomeActive, onBecomeInactive]);

  // Handle Play/Pause based on active state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isCurrentlyActive) {
      // Play the video and handle potential autoplay blocking gracefully
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay was prevented by the browser:', error);
        });
      }
    } else {
      video.pause();
    }
  }, [isCurrentlyActive]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
        preload="metadata"
        muted
        loop
        playsInline
      />
      <div className="absolute top-3 right-3 pointer-events-none z-10">
        <div className="bg-black/40 backdrop-blur-sm p-1.5 rounded-full">
          <PlayCircle className="w-5 h-5 text-white/90" />
        </div>
      </div>
    </div>
  );
}
