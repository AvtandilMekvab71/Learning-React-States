import {useState} from 'react'

export default function LoginStatus(){
    const [isLoggedIn] = useState(false)

    return(
        <div>
            <button onClick = {isLoggedIn((bool) => !bool)}>Toggle</button>
            {isLoggedIn ? <h1>You are logged in!</h1> : <h1>You are logged out</h1>}
        </div> 
    )
}
