import React, { useEffect, useState } from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import StudentList from "./StudentList";

function StudentPage() {
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
        <main>
            <NewAssignmentForm students={students} />
            <StudentList students={students} />
        </main>
    );
}

export default StudentPage;