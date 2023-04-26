import "./profile.css";
import Topbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rigthbar/rigthbar"
import { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios"
const Profile = () => {
  const [user, setUser] = useState({})
  const username = useParams().username
  const PF = process.env.REACT_APP_PUBLIC_FOLDER


useEffect(() => {
  const fectUsers = async() =>{
    const res = await axios.get(`/users?usermane=${username}`)
    setUser(res.data)
    console.log(res.data)
  } 
  fectUsers()
  
  },[username])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PF+"/person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF+"/person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile