import React, { Component } from 'react'
import AdminNav from './AdminNav';

export default class AdminBankLocker extends Component {
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
                        <h1>Bank Information Locker</h1>
                    </div>
                    <div>
                        <button style={{height:'2rem',width:'5rem',margin:'1rem 0rem 1rem 0rem'}} onClick={() => this.addEmail()}> <b>+</b> Add</button>
                    </div>
                    <div  className="display-box add" style={{display:'none',transitionDelay:'5s'}}>
                        <div>
                            <h3>Add Bank Account details</h3>
                        </div>
                        <div>
                            <label>Username : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Account Number : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>IFSC Code : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Branch code : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Bank name : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div style={{display:'flex'}}>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}}>Add Details</button>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}} onClick={() => this.CloseEmail()}>Close</button>
                        </div>
                    </div>
                    <div className="display-box bank-info" style={{marginBottom:'2rem'}}>
                        <div>
                            <label style={{marginTop:'1rem'}}>Username : </label> rajaram<br></br>
                            <label>Account Number : </label> 1219830189032<br></br>
                            <label>IFSC code : </label> rajaram<br></br>
                            <label>Branch code : </label> 12IO21<br></br>
                            <label>Bank name : </label> CUB<br></br>
                        </div>
                        <div style={{margin:'0rem',marginLeft:'2.5rem'}}>
                            <button style={{height:'2rem',width:'5rem',margin:'1rem 1rem 1rem 0rem'}}> <b>+</b> Edit</button>
                            <button style={{height:'2rem',width:'5rem',margin:'1rem 1rem 1rem 0rem'}}> Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
