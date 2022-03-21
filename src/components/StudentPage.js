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
            .then(r => r.json())
            .then(studentsArray => {
                setStudents(studentsArray);
            });
    }, [])
    function handleAddStudent(newStudent) {
        const updatedStudentsArray = [...students, newStudent];
        setStudents(updatedStudentsArray);
    }
    function handleDeleteStudent(deletedStudent) {
        const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
        setStudents(updatedStudents);
    }
    
    const [assignments, setAssignments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/assignments")
            .then((r) => r.json())
            .then(assignmentsArray => {
                setAssignments(assignmentsArray);
            });
    }, [])
    function handleUpdateGrade(updatedAssignment) {
        const updatedAssignments = assignments.map((assignment) => {
          if (assignment.id === updatedAssignment.id) {
            return updatedAssignment;
          } else {
            return assignment;
          }
        });
        setAssignments(updatedAssignments)
    }

    return (
        <div>
            <div style={style}>
                <NewStudentForm 
                    onAddStudent={handleAddStudent}
                />
            </div>
            <main style={style}>
                <StudentList 
                    onDeleteStudent={handleDeleteStudent}
                    onUpdateGrade={handleUpdateGrade}
                    students={students}
                />
            </main>
        </div>
    );
}

export default StudentPage;