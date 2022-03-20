import React, { useEffect, useState } from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import AssignmentList from "./AssignmentList";

function AssignmentPage() {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }

  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/assignments")
      .then(r => r.json())
      .then(assignmentArray => {
        setAssignments(assignmentArray);
  });
}, [])

  console.log(assignments);

  return (
    <div>
      <div style={style}>
        <NewAssignmentForm assignments={assignments} />
      </div>
      <main style={style}>
        <AssignmentList assignments={assignments} />
      </main>
    </div>
  );
}

export default AssignmentPage;
