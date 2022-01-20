// index.js
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
// 創建 component, 將會產生一些 HTML
const API_KEY = "YOUR_YT_API_KEY";
class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            videos: [] ,
            selectedViedo: null
        };

       this.videoSearch('dinter');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => { // 這邊要注意，如果寫 function 的話會不能使用 this.setState
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render () { 
        // 透過 lodash  限制每300 ms 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
                <SearchBar onSearchTermChange={videoSearch}/> 
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));