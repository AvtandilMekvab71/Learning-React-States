import {useState} from 'react'

export default function LoginStatus(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
            <button onClick = {() => setIsLoggedIn(prev => !prev)}>{isLoggedIn ? 'logout' : 'login'}</button>
            {isLoggedIn ? <h2>The user is logged in.</h2> : <h2>The user is not logged in.</h2>}
        </div>
    )
}