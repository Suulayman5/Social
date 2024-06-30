import Topbar from "../../components/Topbar/Topbar"
import Rightbar from "../../components/RightBar/Rightbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feeds from "../../components/Feeds/Feeds"
import './Home.css'
export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feeds/>
        <Rightbar/>
      </div>
     
    </>
  )
}

