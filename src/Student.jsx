export default function StudentList(){
    const students = [
        {name: 'Marty', id: 101},
        {name: 'Edward', id: 102},
        {name: 'Charlie', id: 103},
        {name: 'Paul', id: 104}
    ]
     

    return(
        <div>
            <ul>
                {students.map((student) => (
                    <li key = {student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    )
}