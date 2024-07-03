import './post.css'
import {MoreVert} from '@mui/icons-material';
import { Users } from '../../Data';
import { useState } from 'react';

export default function Post({post}) {
    const user = Users.filter(u=>u.id===1) 
    const [like, setLike]= useState(post.like)
    const {isLiked, setIsLiked} = useState(false)
    const likeHandler =() =>{
        setLike(isLiked ? like - 1 : like +1)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u) =>u.id === post?.userId)[0].profilePicture}/>
                    <span className="postUsername">{Users.filter((u) =>u.id === post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/Like-Button-PNG-Free-Image.png" onClick={likeHandler}/>
                    <img className='likeIcon' src="/assets/love_9453965.png" onClick={likeHandler}/>
                    <span className='postLikeCounter'>{like} Reactions</span>
                </div>
                <div className="postBottomRight">
                <span className='PostCommentText'>{post.Comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
