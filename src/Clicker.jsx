import {useState} from 'react'

export default function Clicker(){
    const [count, setCount] = useState(0)

    return(
        <div id = '007' className = 'box'>
            <h2 className = 'title'>{count} Likes</h2>
            
            <button onClick = {() => setCount(count + 1)} className = 'btn'>
                <i className="fas fa-heart"></i>
            </button>
        </div>
    )

}