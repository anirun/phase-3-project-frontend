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

    // initiate useState for "students"
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/students")
            .then(r => r.json())
            .then(studentsArray => {
                setStudents(studentsArray);
            });
    }, [])
    
    function handleDeleteStudent(deletedStudent) {
        const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
        setStudents(updatedStudents);
    }
    
    return (
        <div>
            <div style={style}>
                <NewStudentForm />
            </div>
            <main style={style}>
                <StudentList 
                    onDeleteStudent={handleDeleteStudent}
                    students={students}
                />
            </main>
        </div>
    );
}

export default StudentPage;