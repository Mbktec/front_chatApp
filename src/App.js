import Profile from "./pages/profile/profile";
import Home from "./pages/Home/Home"
import Login from "./pages/login/login"
import Register from "./pages/register/Register"
import { Routes, Route} from 'react-router-dom';
function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profil/:username" element={<Profile/>}/>
  </Routes>
   <Register/>
  </>
 
}

export default App;
