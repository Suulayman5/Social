import './Sidebar.css'
import {RssFeed ,Menu} from '@mui/material'
export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Menu className="sidebarIcon"/> */}
            <span className="sidebarNamet">
              Feed
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Chat
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Videos
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Groups
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Bookmarks
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Questions
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Jobs
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Events
            </span>

          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarName">
              Courses
            </span>

          </li>
        </ul>
        <button className="sidebarBtn"> Show more </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/15511.jpg"  className="sidebarFriendImg" />
            <span className="sidebarFriendName">Oliver Pat</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
