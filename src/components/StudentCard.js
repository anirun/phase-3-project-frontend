import React from "react";

function StudentCard({ student }) {
  const { name, grade } = student;
  
  return (
    <li className="card">
      <h4>{name}</h4>
      <p>Grade: {grade}</p>
      <button className="primary">View Assignments</button>
    </li>
  );
}

export default StudentCard;
