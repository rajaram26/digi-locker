import React, { Component } from 'react'
import Nav from './Nav'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="border profile" style={{width:'90%',maxHeight:'100%',margin:'2rem 2rem 0rem 5rem'}}>
                    <div>
                        <h1>Profile Details</h1>
                    </div>
                    <div>
                        <label>Username:</label>
                        <input type="text"></input><br></br>
                        <label>Email:</label>
                        <input type="text"></input><br></br>
                        <label>Mobile:</label>
                        <input type="text"></input><br></br>
                        <label>Password:</label>
                        <input type="text"></input><br></br>
                    </div>
                    <div>
                        <button style={{marginBottom:'1rem'}}> Update</button>
                    </div>
                </div>
            </div>
        )
    }
}
