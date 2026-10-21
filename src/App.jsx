import LoginStatus from './Login.jsx'
import StudentList from './Student.jsx'
import ClickTracker from './ClickTracker.jsx'
import PersonalGreeting from './PersonalGreeting.jsx'

export default function App(){
    return(
        <>
            <LoginStatus/>
            <StudentList/>
            <ClickTracker/>
            <PersonalGreeting/>
        </>
    )
}