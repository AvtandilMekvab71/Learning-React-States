import {useState} from 'react'

export default function ClickTracker (){
    const [count, counter] = useState(0);
    function handleClick(){
        counter(prev => prev + 1) // *! Event handlers respond to user actions and they do not necessarily return a value
    }

    return(
        <div id='007'>
            <button onClick = {handleClick}>Click me</button>
            <p>Clicked {count} times</p>
        </div>
    )
}