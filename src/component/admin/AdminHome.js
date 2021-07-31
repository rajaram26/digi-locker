import React, { Component } from 'react'
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import AdminNav from './AdminNav';


export default class AdminHome extends Component {
    render() {
        return (
            <div>
                <AdminNav/>
                <div className="border" style={{margin:'3rem 2rem 1rem 3rem',width:'80%',height:'200px'}} >
                    <div>
                        <h1>Hi Raja !!!</h1>
                    </div>
                    <div>
                        <p>This is the software where you can store all your passwords or any of your personal things which you think thats need to be highly protected</p>
                    </div>
                </div>
            </div>
        )
    }
}
