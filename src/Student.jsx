
export default function Student({
    name = "John Doe",
    age = "32",
    condition = true
}){
    return(
        <div className  = 'card'>
            <p>Hello, I'm {name}!</p>
            <p>I am {age} years old.</p>
            <p>My logic is {condition ? "True" : "False"}.</p>
        </div>
    )
}

