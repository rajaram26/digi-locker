import React, { Component } from 'react'
import Nav from './Nav'

export default class ImageLocker extends Component {
    
    addEmail = () => {
        document.querySelector('.add').style.display='block';
    }
    CloseEmail = () => {
        document.querySelector('.add').style.display='none';
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="border" style={{width:'90%',maxHeight:'100%',margin:'2rem 2rem 0rem 5rem'}}>
                    <div>
                        <h1>Image Locker</h1>
                    </div>
                    <div>
                        <button style={{height:'2rem',width:'5rem',margin:'1rem 0rem 1rem 0rem'}} onClick={() => this.addEmail()}> <b>+</b> Add</button>
                    </div>
                    <div  className="display-box add" style={{display:'none',transitionDelay:'5s'}}>
                        <div>
                            <h3>Add Image</h3>
                        </div>
                        <div>
                            <label>Enter a name for image : </label>
                            <input type="text" autoComplete='off'></input>
                        </div>
                        <div>
                            <label>Choose an image : </label>
                            <input type="file" alt="submit" accept="image/*"></input>
                        </div>
            
                        <div style={{display:'flex'}}>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}}>Add Image</button>
                            <button style={{height:'2rem',width:'7rem',margin:'1rem 1rem 1rem 0rem'}} onClick={() => this.CloseEmail()}>Close</button>
                        </div>
                    </div>
                    <div className="display-box bank-info" style={{marginBottom:'2rem'}}>
                        <div>
                            <label >Username : </label> rajaram<br></br>
                        </div>
                        <div style={{margin:'0rem',marginLeft:'2.5rem'}}>
                            <button style={{height:'2rem',width:'5rem',margin:'1rem 1rem 1rem 0rem'}}> Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
