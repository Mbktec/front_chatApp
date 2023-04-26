import Share from '../share/share'
import Post from '../post/post'
import './feed.css'
import axios from "axios"
import { useEffect, useState } from 'react'


function Feed({username}) {
const [posts, setPosts] = useState([])


useEffect(() => {
const fectPosts = async() =>{
  const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/6443cb6cb5eba7a3baceabd1")
  setPosts(res.data)
} 
fectPosts()

},[])

  return (
    <div className='feed'>
       <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
          <Post key={p._id} post={p}/>
        ))}
       </div>
        
      </div>
  )
} 

export default Feed