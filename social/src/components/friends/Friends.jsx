

export default function Friends({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture}  className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>

  )
}
