import React, { Component } from 'react'
import AdminNav from './AdminNav';

export default class AddUser extends Component {
    // constructor(props){
    //     super(props);
    // }

    addEmail = () => {
        document.querySelector('.add').style.display='block';
    }
    CloseEmail = () => {
        document.querySelector('.add').style.display='none';
    }

    render() {
        return (
            <div>
                <AdminNav/>
                <div className="border" style={{width:'90%',maxHeight:'100%',margin:'2rem 2rem 0rem 5rem'}}>
                    <div>
                        <h1>Add Users</h1>
                    </div>
                    <div  className="display-box add" style={{display:'block',transitionDelay:'5s',marginBottom:'1rem'}}>
                        <div>
                            <h3>Add user account details</h3>
                        </div>
                        <div>
                            <label>Username : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Email : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Mobile : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Password : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}}>Add user</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
