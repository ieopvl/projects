import React from "react";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {fetchDataByQuery} from "../../utils/getYoutubeData/fetchDataByQuery";
import {VideoList} from "../VideoList/VideoList";
import {VideoPlayer} from "../VideoPlayer/VideoPlayer";

export class App extends React.Component {

    state = {
        videosList: [],
        selectedVideo: null,
        nextPage: null,
        prevPage: null,
        query: null,
    }

    submitFormHandler = async (query, next, prev) => {
        const {data} = await fetchDataByQuery(query, this.state.nextPage);
        console.log(data)
        this.setState({
            query: query,
            videosList: data.items,
            nextPage: data.nextPageToken,
            prevPage: data.prevPageToken,
            selectedVideo: this.state.selectedVideo ? this.state.selectedVideo : data.items[0]
        })
    }

    getNextPage = () => {
        this.submitFormHandler(this.state.query, this.state.nextPage);
    }

    getPrevPage = () => {
        this.submitFormHandler(this.state.query, null, this.state.prevPage);
    }

    selectVideo = (video) => {
        console.log(video)
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (<div className="app container">
            <SearchPanel SubmitFormHandler={this.submitFormHandler}/>
            <VideoPlayer video={this.state.selectedVideo}/>
            <VideoList list={this.state.videosList}
                       selectVideo={this.selectVideo}
                       onNextPage={this.getNextPage}
                       onPrevPage={this.getPrevPage}

            />
        </div>)
    }
}