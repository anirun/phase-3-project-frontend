import React from "react";
import AssignmentCard from "./AssignmentCard";

function AssignmentList({ assignments }) {
  
  return (
    <ul className="cards">
      {assignments.map((assignment) => {
        return <AssignmentCard key={assignment.id} assignment={assignment} />;
      })}
      </ul>
  );
}

export default AssignmentList;
