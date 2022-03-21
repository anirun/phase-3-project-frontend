import React, { useState } from "react";

function NewAssignmentForm() {
    const [name, setName] = useState("")

    console.log(name)

    return (
        <div className="new-assignment-form">
            <h4>New Assignment</h4>
            <form>
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