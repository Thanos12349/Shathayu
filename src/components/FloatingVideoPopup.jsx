import React, { useRef, useState, useEffect } from "react";
import "../Styles/FloatingVideoPopup.css";

export default function FloatingVideoPopup({ videoSrc, poster, width = 300, height = 170 }) {
  const [visible, setVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!visible && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [visible]);

  const enterFullScreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen API failed:", err);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleClose = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="floating-video-container"
      style={{ width: width + "px", height: height + "px" }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        className="fvp-video"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls={false}
      />

      {/* ----------------- TOP CONTROLS ----------------- */}
      <div className="fvp-controls-top">
        <button className="fvp-btn-close" onClick={handleClose}>✕</button>
      </div>

      {/* ----------------- BOTTOM CONTROLS ----------------- */}
      <div className="fvp-bottom-controls">
        <div className="fvp-left">
          <button className="fvp-btn" onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            className="fvp-btn"
            onClick={() => {
              const v = videoRef.current;
              if (v) v.currentTime = Math.max(0, v.currentTime - 10);
            }}
          >
            « 10s
          </button>

          <button
            className="fvp-btn"
            onClick={() => {
              const v = videoRef.current;
              if (v) v.currentTime = Math.min(v.duration || 0, v.currentTime + 10);
            }}
          >
            10s »
          </button>
        </div>

        <button className="fvp-btn" onClick={enterFullScreen}>Fullscreen</button>
      </div>
    </div>
  );
}
