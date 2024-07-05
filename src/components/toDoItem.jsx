import React from "react";
import { useState } from "react";

function ToDoItem(props){
    var [isClicked,setIsClicked] = useState(false);
    var customStyle = {
        textDecoration : 'line-through'
    };
    function handleClick(){
        setIsClicked(!isClicked);
    }
    console.log(isClicked);
    return(
    <div onClick={handleClick}>
        {isClicked? <li style={customStyle}>{props.text}</li> : <li>{props.text}</li>}
    </div>);
}

export default ToDoItem;