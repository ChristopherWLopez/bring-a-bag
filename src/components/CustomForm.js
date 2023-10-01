import React, { useState} from "react";

const CustomForm = () => {

    const [userInput, setUserInput] = useState('')

    const UserInput=(e)=>{
        
    }
  return (
    <div>
        <form onSubmit={UserInput}>
            <label>
                <input type="text" >
            </label>
        </form>
      
    </div>
  )
}

export default CustomForm
