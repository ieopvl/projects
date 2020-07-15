import React from 'react'

export const VideoPlayer = ({video}) => {

    if (!video) {
        return <div>No video selected</div>
    }
    const src = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="row mb-2 shadow">
            <div className="col embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                        src={src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}