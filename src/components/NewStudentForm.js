import React, { useState } from "react";
import {useHistory} from "react-router-dom";

function NewStudentForm() {
    const [student, setStudent] = useState({
        name: ""
    })
    const history = useHistory();

    const handleChange = (e) => {
        setStudent({
            ...student, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ([student.name].some(val => val.trim() === "")) {
            alert("You must provide a name!")
        }

        const newStudent = {
            name: student.name
        }

        fetch(`http://localhost:9292/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent)
          })
        .then(() => history.push("/students"))
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
                    placeholder="Student name?" 
                    value={student.name} 
                    onChange={handleChange}
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default NewStudentForm;