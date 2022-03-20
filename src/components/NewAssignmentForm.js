import React from "react";

function NewAssignmentForm() {
    return (
        <div className="new-assignment-form">
            <h4>New Assignment</h4>
            <form>
                <input type="text" name="name" placeholder="Assignment name" />
                <button type="submit">Add Assignment</button>
            </form>
        </div>
    )
}

export default NewAssignmentForm;