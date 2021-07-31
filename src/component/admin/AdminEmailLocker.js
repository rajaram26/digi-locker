import React, { Component } from 'react'
import AdminNav from './AdminNav';

export default class AdminEmailLocker extends Component {
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
                        <h1>Email Locker</h1>
                    </div>
                    <div>
                        <button style={{height:'2rem',width:'5rem',margin:'1rem 0rem 1rem 0rem'}} onClick={() => this.addEmail()}> <b>+</b> Add</button>
                    </div>
                    <div  className="display-box add" style={{display:'none',transitionDelay:'5s'}}>
                        <div>
                            <h3>Add Email details</h3>
                        </div>
                        <div>
                            <label>Email : </label>
                            <input type="text"></input>
                        </div>
                        <div>
                            <label>Password : </label>
                            <input type="text"></input>
                        </div>
                        <div style={{display:'flex'}}>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}}>Add Email</button>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}} onClick={() => this.CloseEmail()}>Close</button>
                        </div>
                    </div>
                    <div className="display-box" style={{display:'flex',marginBottom:'2rem'}}>
                        <div>
                            <label>Email : </label> rajaramrt2000@gmail.com<br></br>
                            <label>Password : </label> password
                        </div>
                        <div>
                            <button style={{height:'2rem',width:'5rem',margin:'1rem 1rem 1rem 0rem'}}> <b>+</b> Edit</button>
                            <button style={{height:'2rem',width:'5rem',margin:'1rem 1rem 1rem 0rem'}}> Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
