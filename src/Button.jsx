import {useState} from 'react'

export default function LikeBtn(){
    const [count, setCount] = useState(0);

    return (
        <div id='likeButton'>
            <h2>{count} Likes</h2>
            <button onClick = {() => setCount(prev => prev + 1)} className = 'likebtn'>Like</button>
        </div>
    )
}