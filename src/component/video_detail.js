// video_detail.js

import React from 'react';

const VideoDetail = ({video}) =>{
  if (!video){ // 如果不寫的話，video = undefine 所以 videoId 那行就會出錯
    return <div>loading...</div>
  }
  const videoId = video.id.videoId;
  // const url ='https://www.youtube.com/embed/' + videoId
  const url = `https://www.youtube.com/embed/${videoId}` // 可以用 ` 然後 ${}讀取變數
  return(
    <div className='video-detail col-md-8'>
      <div className='emded-responsive embed-reponsive-16by9'>
        <iframe className='emded-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>    
    


  );
};

export default VideoDetail;