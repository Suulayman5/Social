import './Rightbar.css'
import { Users } from '../../Data'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src='assets/18203.jpg'/>
          <span className='birthdayText'><b>Scar </b>and <b>3 other friends </b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src='assets/post/2149141352.jpg'/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u =>(
            <Online key={u.id} user= {u}/>
          )))}
          
        </ul>
      </div>
    </div>
  )
}
