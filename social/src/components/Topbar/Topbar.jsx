import './Topbar.css'
import { Search,Person,Chat,Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">Social</span>
        </div>
          <div className="topbarCenter">
            <div className="searchBar">
              <Search className='searchIcon'/>
              <input placeholder='search for a friend'
               type="text" className="searchInput" />
            </div>
          </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarlink"> Homepage</span>
            <span className="topbarL"> Timeline</span>
          </div>
          <div className="topbarIcons"> 
            <div className="topbarIconItem">
              {/* <Person/> */}
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              {/* <Chat/> */}
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              {/* <Notifications/> */}
              <span className="topbarIconBadge">1</span>
            </div> 
          </div>
          <img src="/assets/person/8150.jpg" className='topbarImg'/>
        </div>
    </div>
  )
}
