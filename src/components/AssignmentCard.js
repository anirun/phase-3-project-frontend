import React from "react";

function AssignmentCard({ assignment }) {
  const { name, grade } = assignment
  
  return (
    <ul className="card">
      <h4> {name} | {grade} | <button className="primary">View Assignment</button> </h4>
    </ul>
  );
}

export default AssignmentCard;
