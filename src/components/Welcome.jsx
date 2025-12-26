import React from "react";
import '../Styles/Welcome.css'; 

export default function Welcome() {
    console.log("function main aara hai");

    return (
        <div className="video-wrapper">
            <h2 className="video-heading">WELCOME</h2>

            <div className="video-container">
                <video
                    className="main-video"
                    src="https://di7if5tmmdf4zu0a.public.blob.vercel-storage.com/04.mp4"
                    autoPlay
                    muted
                    playsInline
                    controls
                />
            </div>
        </div>
    );
}
