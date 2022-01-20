// video_list_item.js
import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
  // console.log(props.video)
  // console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url; // YT  回傳的內容

  return (
    // 這些 className 都是套用 bootstrap, 在 index.html 裡面有定義
    <li onClick={()=> onVideoSelect(video)} className='list-group-item'>  
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl}/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
    )
}
export default VideoListItem