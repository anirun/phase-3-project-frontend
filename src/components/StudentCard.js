import React from "react";
import AssignmentCard from "./AssignmentCard"

function StudentCard({ student }) {
  const { name, assignments } = student;
  
  return (
    <ul className="card">
      <h2>{name}</h2>
      <h3>{assignments.map((assignment) => {
        return <AssignmentCard key={assignment.id} assignment={assignment} />
      })}</h3>
    </ul>
  );
}

export default StudentCard;
