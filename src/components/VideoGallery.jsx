import React, { useState } from "react";
import "../Styles/VideoGallery.css";

const videos = [
    { url: "https://www.youtube.com/watch?v=zktrrLfmnfc", title: "Video 1" },
    { url: "https://www.youtube.com/watch?v=obgMGM6I2rE", title: "Video 2" },
    { url: "https://www.youtube.com/watch?v=zktrrLfmnfc", title: "Video 3" },
    { url: "https://www.youtube.com/watch?v=zktrrLfmnfc", title: "Video 4" },
    { url: "https://www.youtube.com/watch?v=zktrrLfmnfc", title: "Video 5" },
    { url: "https://www.youtube.com/watch?v=zktrrLfmnfc", title: "Video 6" },
];

const getVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
};

const VideoGallery = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    return (
        <>
        <div className="video-gallery-header">
            <h2 className="review-title">Video Testimonials</h2>
            </div>
            <div className="video-gallery">

                {videos.map((video, index) => {
                    const videoId = getVideoId(video.url);
                    return (
                        <div key={index} className="video-card">
                            {playingVideo === index ? (
                                <iframe
                                    width="100%"
                                    height="300"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div
                                    className="video-thumbnail"
                                    onClick={() => setPlayingVideo(index)}
                                    style={{
                                        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                                    }}
                                >
                                    <div className="play-button">&#9658;</div>
                                </div>
                            )}
                            <h4 className="video-title">{video.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default VideoGallery;
