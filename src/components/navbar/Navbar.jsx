import "./navbar.css"
import {Search, Person, Chat, Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Niger's coder</span>
          </Link>
        </div>
        <div className="navbarCenter">
          <div className="seachbar">
            <Search className="searchIcon"/>
            <input placeholder="Seacher for friend post" className="searchInput" />
          </div>
        </div>
        <div className="navbarRigth">
          <div className="navbarLinks">
            <span className="navbarLink">Homepage</span>
            <span className="navbarLink">Timeline</span>
          </div>
          <div className="navbarIncons">
            <div className="vabarIconItem">
              <Person/>
              <span className="navbarIconBadge">1</span>
            </div>
            <div className="vabarIconItem">
              <Chat/>
              <span className="navbarIconBadge">1</span>
            </div>
            <div className="vabarIconItem">
              <Notifications/>
              <span className="navbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="navbarImg" />
        </div>
    </div>
  )
}

export default Navbar