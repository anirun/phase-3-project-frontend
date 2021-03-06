import React from "react";
import Header from "./Header";
import StudentPage from "./StudentPage";
import NewStudentForm from "./NewStudentForm";
import Navbar from "./Navbar";
import Home from "./Home";
import AssignmentPage from "./AssignmentPage";
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  const style={
    backgroundColor: "rgb(96, 53, 120)"
  }

  const center={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className="app" style={style}>
      <Router>
        <Header />
        <div style={center}>
          <Navbar />
        </div>
        <Switch>
          <Route path="/students">
            <StudentPage />
          </Route>
          <Route exact path="/assignments">
            <AssignmentPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
