import React from "react";
import {VideoItem} from "./VideoItem/VideoItem";
import {ArrowLeftIcon, ArrowRightIcon} from "@primer/octicons-react";

import "./VideoList.css"

export const VideoList = (props) => {
    const items = props.list.map( item => {
        {console.log(item.id.videoId)}
        return <li className="list-group-item" key={item.id.videoId}><VideoItem video={item} onSelectVide={props.selectVideo}/></li>
    })

    if (items.length === 0) {
        console.log("next")
        return <div></div>
    }

    return (
        <div className="container mb-2">
            <div className="row align-items-center flex-direction-rev-sm">
                <div className="col-sm-1 btn btn-primary btn-sm text-center" onClick={props.onNextPage}>
                    <ArrowLeftIcon size={24} />
                </div>

                <ul className="col-sm list-group list-group-horizontal-sm my-2 mx-2">
                    { items }
                </ul>

                <div className="col-sm-1 btn btn-primary btn-sm text-center"  onClick={props.onPrevPage}>
                    <ArrowRightIcon size={24} />
                </div>
            </div>
        </div>
    )
}