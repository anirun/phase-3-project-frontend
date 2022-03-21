import React from "react";
import StudentCard from "./StudentCard";


function StudentList({ students, onDeleteStudent, onUpdateGrade }) {

    
    return (


        <ul className="cards">
            {students.map((student) => { 
            return <StudentCard 
                        key={student.id} 
                        student={student}
                        onUpdateGrade={onUpdateGrade}
                        onDeleteStudent={onDeleteStudent}
                    />;
    })}
    </ul>
    );
}

export default StudentList;