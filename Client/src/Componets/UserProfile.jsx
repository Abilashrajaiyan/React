/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
function User (props){
    return(
<div className='mainDiv '>
            <div className="card bg-secondary text-light" style={{ width: '18rem' }}>
                <img src="Images/Polo.avif" className="card-img-top" alt="img" />
                <div className="card-body">
                    <h6 className={props.Online?"card-title1 online":"card-title1 offline"}>{props.Online?"Online":"Offline"}</h6>
                    <h6 className="card-title2">{props.name}</h6>
                    <h6 className="card-title3">{props.city}</h6>
                    <h6 className="card-title4">{props.role}</h6>
                    <div className='btn-div'>
                        <button type="button" className="btn bg-dark text-light">Message</button>
                        <button type="button" className="btn btn-outline-dark text-light">Following</button>
                    </div>
                    <ul className='MainSkills'>
                        <p className='skills'>Skills</p>
                        <div className='MainList'>
                            {props.skills.map((Skill, Index)=>{
                                <li key={Index}>{Skill}</li>
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
const UserProfile = () => {
    return (
      <><User name = "Abilash" city = "chennai" role = "Mern Developer" Online = {true} skills = {["HTML", "Css", "JAvaScript", "MongoDb", "Tailwind", "Bootstrap"]}/></>  
    )
}

export default UserProfile 

