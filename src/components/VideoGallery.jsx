// import React, { useState } from "react";
// import "../Styles/VideoGallery.css";

// const videos = [
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/01.mp4", title: "", },
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/02.mp4", title: "", },
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/03.mp4", title: "", },
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/04.mp4", title: "" },
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/05.mp4", title: "" },
//     { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/02.mp4", title: "", },
// ];

// const VideoGallery = () => {
//     const [playingVideo, setPlayingVideo] = useState(null);

//     return (
//         <>
//             <div className="video-gallery-header">
//                 <h2 className="review-title">Video Testimonials</h2>
//             </div>

//             <div className="video-gallery">
//                 {videos.map((video, index) => (
//                     <div key={index} className="video-card">

//                         {/* ---------- PLAYING FULL VIDEO ---------- */}
//                         {playingVideo === index ? (
//                             <video
//                                 width="100%"
//                                 height="300"
//                                 controls
//                                 autoPlay
//                                 style={{ borderRadius: "10px" }}
//                             >
//                                 <source src={video.url} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         ) : (

//                             /* ---------- THUMBNAIL VIEW ---------- */
//                             <div
//                                 className="video-thumbnail"
//                                 onClick={() => setPlayingVideo(index)}
//                             >
//                                 <video
//                                     src={video.url}
//                                     muted
//                                     className="thumbnail-video"
//                                     style={{
//                                         width: "100%",
//                                         height: "300px",
//                                         objectFit: "cover",
//                                         borderRadius: "10px",
//                                         filter: "brightness(60%)"
//                                     }}
//                                 />
//                                 <div className="play-button">&#9658;</div>
//                             </div>
//                         )}

//                         <h4 className="video-title">{video.title}</h4>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default VideoGallery;
import React, { useState } from "react";
import "../Styles/VideoGallery.css";

const videos = [
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/01.mp4", poster: "/images/01.png", title: "" },
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/02.mp4", poster: "/images/02.png", title: "" },
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/03.mp4", poster: "/images/03.png", title: "" },
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/04.mp4", poster: "/images/04.png", title: "" },
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/05.mp4", poster: "/images/05.png", title: "" },
    { url: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/02.mp4", poster: "/images/06.png", title: "" },
];

const VideoGallery = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    return (
        <>
        <div className="video-container">
              <div className="video-gallery-header">
                <h2 className="review-title">Video Testimonials</h2>
            </div>

            <div className="video-gallery">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">

                        {/* ---------- PLAYING FULL VIDEO ---------- */}
                        {playingVideo === index ? (
                            <video
                                width="100%"
                                height="300"
                                controls
                                autoPlay
                                style={{ borderRadius: "10px" }}
                            >
                                <source src={video.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (

                            /* ---------- THUMBNAIL USING POSTER ---------- */
                            <div
                                className="video-thumbnail"
                                onClick={() => setPlayingVideo(index)}
                            >
                                <video
                                    poster={video.poster}
                                    muted
                                    className="thumbnail-video"
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                                <div className="play-button">&#9658;</div>
                            </div>
                        )}

                        <h4 className="video-title">{video.title}</h4>
                    </div>
                ))}
            </div>

        </div>
          
        </>
    );
};

export default VideoGallery;
