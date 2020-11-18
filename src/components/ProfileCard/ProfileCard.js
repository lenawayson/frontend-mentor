import React, { Component } from 'react';
import './ProfileCard.css';
import { Link } from "react-router-dom";

class ProfileCard extends Component {

    render(){
        return(
            <div>
                <header className="page-header">
                    <Link to="/"><h5>Back</h5></Link>
                </header>
            <div class="bg">
                <div class="circle-top"></div>
                <div class="card">
                    <div class="card-img"></div>
                    <div class="profile-pic"></div>
                    <div class="profile">
                    <div id="who">
                        <p id="name">Victor Crest</p> 
                        <p id="age">26</p>
                    </div>
                    <div id="location">London</div>
                    
                    
                        <div class="bottom-row">
                            <div class="stat">
                                <p class="big">80K</p>
                                <p class="littler">Followers</p>
                            </div>
                            <div class="stat">
                                <p class="big">803K</p>
                                <p class="littler">Likes</p>
                            </div>
                            <div class="stat">
                                <p class="big">1.4K</p>
                                <p class="littler">Photos</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Lena Wayson</a>.
                </div>
                <div class="circle-bottom"></div>
            </div>
            </div>
            
        )
    }

} export default ProfileCard