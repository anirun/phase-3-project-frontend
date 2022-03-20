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
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/students">
            <StudentPage />
          </Route>
          
          <Route path="/assignments">
            <AssignmentPage />
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
