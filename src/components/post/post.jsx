import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"



function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isliked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER


useEffect(() => {
  const fectUsers = async() =>{
    const res = await axios.get(`/users?userId=${post.userId}`)
    setUser(res.data)
  } 
  fectUsers()
  
  },[post.userId])


  const handler = () => {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
              <img src={user.coverPicture || PF+"/person/noAvatar.png"} alt="" className="postProfileImg" />

              </Link>
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.createdAt}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={PF+post.img}  alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={PF+"/like.png"} alt="" className="likeIcon" onClick={handler}/>
                <img src={PF+"/heart.png"} alt="" className="likeIcon" onClick={handler} />
                <span className="postLikeconter">{like} peaple like it</span>
            </div>
            <div className="postBottomRight ">
                <span className="postCommentText"> {post.comment} comment</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post