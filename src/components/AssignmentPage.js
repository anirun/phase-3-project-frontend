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
    fetch("http://localhost:9292/assignments/all")
      .then(r => r.json())
      .then(assignmentArray => {
        setAssignments(assignmentArray);
  });
}, [])

  console.log(assignments);

  function handleAddAssignment(newAssignment) {
    const updatedAssignmentsArray = [newAssignment, ...assignments];
    setAssignments(updatedAssignmentsArray);
  }

  return (
    <div>
      <div style={style}>
        <NewAssignmentForm 
          onAddAssignment={handleAddAssignment} 
          assignments={assignments} 
        />
      </div>
      <main style={style}>
        <AssignmentList assignments={assignments} />
      </main>
    </div>
  );
}

export default AssignmentPage;
