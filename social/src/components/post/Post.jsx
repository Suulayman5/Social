import './post.css'
import {MoreVert} from '@mui/icons-material';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/8150.jpg" />
                    <span className="postUsername">Simba Mufasa</span>
                    <span className="postDate">5 hours ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hallo</span>
                <img src="/assets/post/41168.jpg" alt="" className="postImg" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/Like-Button-PNG-Free-Image.png"/>
                    <img className='likeIcon' src="/assets/love_9453965.png"/>
                    <span className='postLikeCounter'>32 Reactions</span>
                </div>
                <div className="postBottomRight">
                <span className='PostCommentText'>9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
