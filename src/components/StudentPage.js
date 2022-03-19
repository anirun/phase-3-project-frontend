import React from "react";
import NewAssignmentForm from "./NewAssignmentForm";
import StudentList from "./StudentList";

function StudentPage() {
    return (
        <main>
            <NewAssignmentForm />
            <StudentList />
        </main>
    );
}

export default StudentPage;