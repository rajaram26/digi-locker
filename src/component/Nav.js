import React, { Component } from 'react'
import { Sidebar } from 'primereact/sidebar';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Link } from 'react-router-dom';

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state ={
            visible: false
        }
    }
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div><i className="pi pi-bars" style={{fontSize:'1.8rem',cursor:'pointer'}} onClick={() => {this.setState({visible : true})} }></i></div>
                    <div><h1 style={{margin:'0rem'}}>DIGITAL LOCKER</h1></div>
                </div>
                <div className="card" >
                    <Sidebar visible={this.state.visible} position="left" onHide={() => this.setState({visible:false})} style={{backgroundColor:'black',color:'white'}}>
                        <div className="side-bar">
                            <ul>
                                <li>
                                    <Link to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/email-locker">
                                        Email Locker
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bank-locker">
                                        Bank info Locker
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/image-locker">
                                        Image Locker
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Sidebar>
                </div>
            </div>
        )
    }
}
