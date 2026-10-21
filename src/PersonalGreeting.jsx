import {useState} from 'react'

export default function PersonalGreeting(){
    const [name, setName] = useState('')

    return(
        <div id = '007'>
            <input type="text"
            value = {name}
            onChange = {(event) => setName(event.target.value)}
            />
            {name ? <p>Hello, {name}!</p> : <p>Please enter your name.</p>}
        </div>
    )
}