import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Projects extends Component {

    render(){
        return (
            <div>
                <header className="App-header">
                    <h2>FrontEnd Mentor Projects</h2>
                    <h4> Developed with React</h4>
                </header>
            <div class="container">
                <Link to="/profile-card">
                    <div id="profile-card" class="project">
                        <h4>Profile Card Component</h4>
                    </div>
                </Link>
            </div>
            </div>
        
        )
    }

} export default Projects