import './Feeds.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../Data'

export default function Feeds() {
  return (
    <div className='feeds'>
       <div className="feedWrapper">
        <Share/>
        {Posts.map((p) =>(
          <Post key={p.id} post={p}/>
        ))}
        
       </div>
    </div>
  )
}
