import Share from '../share/share'
import Post from '../post/post'
import {Posts} from '../../dummyData'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
       <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
       </div>
        
      </div>
  )
} 

export default Feed