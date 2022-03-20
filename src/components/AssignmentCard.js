import React from "react";

function AssignmentCard({ assignment }) {
  
  return (
    <ul className="card">
      <h4> {assignment} | <button className="primary">View Grades</button></h4>
    </ul>
  );
}

export default AssignmentCard;
