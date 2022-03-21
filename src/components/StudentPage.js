import React, { useEffect, useState } from "react";
import NewStudentForm from "./NewStudentForm";
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
                <NewStudentForm students={students} />
            </div>
            <main style={style}>
                <StudentList students={students} />
            </main>
        </div>
    );
}

export default StudentPage;