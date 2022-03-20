import React from "react";
import Header from "./Header";
import StudentPage from "./StudentPage";
import NewAssignmentForm from "./NewAssignmentForm";
import Navbar from "./Navbar";
import Home from "./Home";
import AssignmentPage from "./AssignmentPage";
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  const style={
    backgroundColor: "#ffc2c2"
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
          
          <Route path="/assignments">
            <AssignmentPage />
          </Route>
          
          <Route path="/assignments/new">
            <NewAssignmentForm />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
