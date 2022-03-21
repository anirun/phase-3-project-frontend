import React, { useState } from "react";

function NewStudentForm() {
    const style = {
        display: "flex",
        justifyContent: "center",
        itemAlign: "center"
    }
    const [name, setName] = useState("")

    console.log(name)

    return (
        <div className="new-assignment-form">
            <h4 style={style}>New Student</h4>
            <form style={style}>
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