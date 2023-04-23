import Feed from "../../components/feed/feed"
import Navbar from "../../components/navbar/Navbar"
import Rigthbar from "../../components/rigthbar/rigthbar"
import Sidebar from "../../components/sidebar/sidebar"
import "./Home.css"

const Home = () => {
  return <>
  <Navbar/>
  <div className="homeContainer">
  <Sidebar/>
  <Feed/>
  <Rigthbar/>
  </div>
  
   </>

}

export default Home