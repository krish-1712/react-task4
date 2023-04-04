import React from "react";
import { useHistory } from "react-router-dom";

export  function Nopage(){
    const history=useHistory();
    return(
        <div>
            <h1>Hi you entered the Wrong Page 404 Error</h1>
            <button
            onClick={()=>history.push("/")}>
                DashBoard
            </button>
        </div>
    )
}