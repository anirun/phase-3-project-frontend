import React from "react";

function StudentAssignmentCard({ assignment }) {
  const { name, grade } = assignment
  return (
    <ul className="card">
      <h4> {name} | {grade} | <button className="primary">Change Grade</button></h4>
    </ul>
  );
}

export default StudentAssignmentCard;
