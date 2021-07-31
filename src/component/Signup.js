import React, { Component } from 'react'
import 'primeflex/primeflex.css'
import { Link } from 'react-router-dom'

export default class login extends Component {
    render() {
        return (
            <div>
                <div style={{display:'flex'}}>
                    <div style={{width:'70%',backgroundImage: "url('./pics/img.png')",height:'100%',position:'fixed'}}>
                        <div>
                            <h1 style={{float:'left',color:'white',fontSize:'6rem',marginTop:'8rem',marginBottom:'0rem'}}> DIGITAL LOCKER</h1>
                        </div>
                    </div>
                    <div className="p-col-6" style={{backgroundColor:'white',width:'30%',height:'100%',marginLeft:'70%',position:'fixed'}}>
                        <div className="login-box" style={{marginTop:'2rem'}}>
                            <div>
                                <h1 style={{fontSize:'2.5rem'}}>SIGN UP</h1>
                            </div>
                            <div>
                                <label>Name</label><br></br>
                                <input type="text" autoComplete="off"></input>
                            </div>
                            <div>
                                <label>Email</label><br></br>
                                <input type="text" autoComplete="off"></input>
                            </div>
                            <div>
                                <label>Mobile</label><br></br>
                                <input type="text" autoComplete="off"></input>
                            </div>
                            <div>
                                <label>Password</label><br></br>
                                <input type="text" autoComplete="off"></input>
                            </div>
                            <div>
                                <button>Register</button>
                            </div>
                            <div>
                                <Link to="/login">
                                    <p> Back</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
