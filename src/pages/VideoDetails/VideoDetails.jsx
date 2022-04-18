import React  from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Nav, Sidebar } from '../../components'
import { useVideo } from '../../context/video-context'
import './VideoDetails.css'
import { useAuth } from '../../context/auth-context'
import { useLike } from '../../context/like-context'
import {removeFromLiked} from '../../context/like-context'

function VideoDetails(){
    const { videoId } = useParams()
    const { videos } = useVideo()
    const {state: {token}} = useAuth()
    const { likeVideo, setLikeVideo} = useLike()
    const currentVideoPlaying = videos.find(item => item._id === videoId)

    const addToLiked = async (video) => {
      try {
        const resp = await axios.post('/api/user/likes' , {video}, {
          headers: {authorization: token}
        })
        console.log(resp);
        setLikeVideo(resp.data.likes)
      }catch(err) {
        console.log(err);
      }
    }

  return (
      <div className="container-video">
          <Nav />
          <Sidebar />
          <div className='video-player'>
            <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h2 className='current-playing'>{currentVideoPlaying?.title}</h2>
            <div className='current-playing-detail-container'>
             <div className='current-playing-detail-left-container'>
              <p className='current-playing-views'>{currentVideoPlaying?.views}</p>
              <p className="current-playing-views">•</p>
              <p className='current-playing-uploaded'>{currentVideoPlaying?.uploaded}</p>
             </div>
             <div className='current-playing-detail-right-container'>
               {likeVideo.find(item => item._id === videoId) ? <button className="btn flex  detail-btn" onClick={()=> removeFromLiked(token,setLikeVideo,videoId)}><span className="material-icons icon">thumb_up_alt</span>Liked</button>:<button className="btn flex  detail-btn" onClick={() => addToLiked(currentVideoPlaying)}><span className="material-icons-outlined icon">thumb_up</span>Like</button>}
              <button className="btn flex detail-btn"><span className="material-icons-outlined icon">watch_later</span>Watch later</button>
              <button className="btn flex detail-btn"><span className="material-icons-outlined icon">playlist_add</span>Save to playlist</button>
             </div>
          </div>
           <h4 className='current-playing'>{currentVideoPlaying?.creator}</h4>
           </div>
      </div>
  )
}

export { VideoDetails }