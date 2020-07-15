import React from "react";

export const VideoItem = (props) => {

    const onSelectVideo = ( ) => {
        props.onSelectVide(props.video);
    }

    return (
        <img className="card-img" onClick={onSelectVideo} src={props.video.snippet.thumbnails.medium.url} alt=""/>
    )
}