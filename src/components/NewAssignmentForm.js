import React, { useState } from "react";

function NewAssignmentForm( {onAddAssignment} ) {
    const [name, setName] = useState("")
    console.log(name)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
          })
        .then(r => r.json())
        .then((newAssignment) => onAddAssignment(newAssignment))
        }
        
        
    

    return (
        <div className="new-assignment-form">
            <h4>New Assignment</h4>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Assignment name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add Assignment</button>
            </form>
        </div>
    )
}

export default NewAssignmentForm;