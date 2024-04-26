// Code Keypad Component Here

import { mockComponent } from "react-dom/test-utils";

function Keypad (){
    function handleChange(event){
        console.log("Entering password...")
        //console.log(event.target.value) //this will return the password itself i.e "123"
    }
    return (
        <div>
            <input type="password" placeholder="Enter your password" onChange={handleChange} />
        </div>
    );
}

export default Keypad;