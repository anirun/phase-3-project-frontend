import React, { useState } from "react";

function NewStudentForm() {
    const [name, setName] = useState("")
    console.log(name)

    function handleSubmit(e) {
        e.preventDefault();
        // make post req using form data
        fetch("http://localhost:9292/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
          })
        .then(r => r.json())
        .then(console.log)
        // add new assignment to page
        }
    
    const style = {
        display: "flex",
        justifyContent: "center",
        itemAlign: "center"
    }

    return (
        <div className="new-student-form">
            <h4 style={style}>New Student</h4>
            <form style={style} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Student name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default NewStudentForm;