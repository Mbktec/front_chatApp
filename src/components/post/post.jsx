import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from '../../dummyData'
import { useState } from "react"

function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const handler = () => {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo}  alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" onClick={handler}/>
                <img src="assets/heart.png" alt="" className="likeIcon" onClick={handler} />
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