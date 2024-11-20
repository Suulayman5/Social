import './Profile.css'
import Topbar from "../../components/Topbar/Topbar"
import Rightbar from "../../components/RightBar/Rightbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feeds from "../../components/Feeds/Feeds"
export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="assets/post/2149141311.jpg" alt="" className="profileCoverImg" />
            <img src="assets/person/16616.jpg" alt="" className="profileUserImg" />
            </div>
        </div>
        <div className="profileInfo">
            <h4 className='profileInfoName'>Bai Shon Chu</h4>
            <span className="profileInfoDesc">Hello React</span>
        </div>
        <div className='profileRightBottom'>
            <Feeds/>
            <Rightbar profile/>
        </div>
      </div>
      
    </div>
    </>
  )
}
