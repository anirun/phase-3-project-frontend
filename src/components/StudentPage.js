import React, { useEffect, useState } from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import StudentList from "./StudentList";

function StudentPage() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }
    
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/students")
            .then((r) => r.json())
            .then(studentsArray => {
                setStudents(studentsArray);
            });
    }, [])

    console.log(students);

    return (
        <div>
            <div style={style}>
                <NewAssignmentForm students={students} />
            </div>
            <main style={style}>
                <StudentList students={students} />
            </main>
        </div>
    );
}

export default StudentPage;