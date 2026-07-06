import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const songUrl = "/music/bg-music.mp3";

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(songUrl);
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-4 w-64 flex flex-col items-center gap-2 z-50 select-none">
      <span className="text-white text-[11px] tracking-wide italic opacity-80 pointer-events-none text-center block h-4">
        {isPlaying ? "Playing background music..." : "Wanna play music while scrolling?"}
      </span>
      
      <button 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#00BFA5] shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:shadow-[0_0_30px_rgba(0,229,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white translate-x-[1px]">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;