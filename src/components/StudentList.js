import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
    return (
        <ul className="cards">
            {students.map((student) => { 
            return <StudentCard key={student.id} student={student} assignments={student.assignments} />;
    })}
    </ul>
    );
}

export default StudentList;