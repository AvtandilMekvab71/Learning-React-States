import Student from './Student.jsx'

export default function App(){
    return(
        <>
            <Student name = 'Josh ' age = {22} condition = {true}/>
            <Student name = 'Lex' age = {20} condition = {false}/>
            <Student name = 'Elon' age = {21} condition = {true}/>
            <Student />
        </>
    )
}

