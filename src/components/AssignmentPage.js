import React, { useEffect, useState } from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import AssignmentList from "./AssignmentList";

function AssignmentPage() {
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/assignments")
      .then(r => r.json())
      .then(assignmentArray => {
        setAssignments(assignmentArray);
  });
}, [])

  console.log(assignments);

  return (
    <main>
      <NewAssignmentForm />
      <AssignmentList />
    </main>
  );
}

export default AssignmentPage;
