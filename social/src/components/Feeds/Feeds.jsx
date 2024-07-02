import './Feeds.css'
import Share from '../share/Share'
import Post from '../post/Post'

export default function Feeds() {
  return (
    <div className='feeds'>
       <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
       </div>
    </div>
  )
}
