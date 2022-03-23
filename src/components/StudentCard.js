import React, { useEffect, useState } from "react";
import StudentAssignmentCard from "./StudentAssignmentCard"

function StudentCard({ student, onDeleteStudent }) {

  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/students/${student.id}/assignments`)
      .then(r => r.json())
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

  function handleDeleteClick(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/students/${student.id}`, {
        method: "DELETE"
      })
        .then((r) => r.json())
        .then(() => onDeleteStudent(student))
    }



  return (
    <ul className="card">
      <h2>{student.name} | <button onClick={handleDeleteClick}>X</button></h2>
      <h3>{assignments.map((assignment) => {
        return <StudentAssignmentCard 
                  key={assignment.id} 
                  assignment={assignment} 
                  handleUpdateGrade={handleUpdateGrade}
                />
      })}</h3>
    </ul>
  );
}

export default StudentCard;
