import { useState } from 'react';
import './Forms.css';
import React from 'react';


export default function Forms(){
    const [userInput, setUserInput] = useState("");
    function  handleUserInput(event) {
        setUserInput(event.target.value);
    }

    return(
        <div className='container0'>
            
            <form>

                <input type='text' onChange={handleUserInput} placeholder='search' value={userInput} />
                <h4>sign up here</h4><br/>
                <label>username</label><br/>
                <input type='text' placeholder='enter username' /><br/><br/>
                <label>password</label><br/>
                <input type='password' placeholder='enter password' /> <br/><br/>
                <label>comfirm password</label><br/>
                <input type='password' placeholder='confirm password' /><br/><br></br>
                <button className='button'>sign up</button><br/>

             <p>Have and already? log in Here</p>
            </form> 
        </div>
    )
}