import React, { useEffect } from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import StudentList from "./StudentList";

function StudentPage() {
    // const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/students")
            .then((r) => r.json())
            .then(studentArray => {
                console.log(studentArray);
            });
    }, [])

    // console.log(students)

    return (
        <main>
            <NewAssignmentForm />
            <StudentList />
        </main>
    );
}

export default StudentPage;