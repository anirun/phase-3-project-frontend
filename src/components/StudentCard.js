import React from "react";
import AssignmentCard from "./AssignmentCard"

function StudentCard({ student }) {
  const { name, grade, assignments } = student;
  
  return (
    <li className="card">
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <h3>{assignments.map((assignment) => {
        return <AssignmentCard key={assignment.id} assignment={assignment} />
      })}</h3>
    </li>
  );
}

export default StudentCard;
