import React, { useState } from "react";

function StudentAssignmentCard({ assignment, onUpdateGrade }) {
  const { name, grade, id } = assignment

  const [newGrade, setNewGrade] = useState("")
  console.log(newGrade)

  function handleUpdateGradeClick(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/assignments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grade: newGrade
        })
      })
        .then((r) => r.json())
        .then((updatedAssignment) => onUpdateGrade(updatedAssignment));
    }

  return (
    <ul className="card">
      <h4> {name} | {grade} | 
        <form >
          <input 
            type="integer"
            maxLength="3" 
            name="grade" 
            placeholder="0" 
            value={newGrade} 
            onChange={(e) => setNewGrade(e.target.value)}
          />
          <button className="primary" onClick={handleUpdateGradeClick}>Change Grade</button>
        </form>
      </h4>
    </ul>
  );
}

export default StudentAssignmentCard;
