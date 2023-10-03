import React, { useState} from "react";

const CustomForm = () => {

    const [userInput, setUserInput] = useState('')

    const UserInput=(e)=>{
        
    }
  return (
    <div>
        <form onSubmit={UserInput}>
            <label> Enter your Custom message:
                <input type="text"
                value ={userInput}
                onChange={(e)=>setUserInput(e.target.value)}
                 />
            </label>
        </form>
    </div>
  )
}

export default CustomForm
