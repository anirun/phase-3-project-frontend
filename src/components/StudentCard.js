import React from "react";
import StudentAssignmentCard from "./StudentAssignmentCard"

function StudentCard({ student, onDeleteStudent, onUpdateGrade }) {
  const { name, assignments } = student;

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
      <h2>{name} | <button onClick={handleDeleteClick}>X</button></h2>
      <h3>{assignments.map((assignment) => {
        return <StudentAssignmentCard 
                  key={assignment.id} 
                  assignment={assignment} 
                  onUpdateGrade={onUpdateGrade} 
                />
      })}</h3>
    </ul>
  );
}

export default StudentCard;
