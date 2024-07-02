import './Sidebar.css'
import {RssFeed ,Menu,Group,Chat, HelpOutline,PlayCircleFilledOutlined,WorkOutline,Bookmark,Event,Message,School,}from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarNamet">
              Feed
            </span>

          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarName">
              Chat
            </span>

          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarName">
              Videos
            </span>

          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarName">
              Groups
            </span>

          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarName">
              Bookmarks
            </span>

          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarName">
              Questions
            </span>

          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarName">
              Jobs
            </span>

          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarName">
              Events
            </span>

          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
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
