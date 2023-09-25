import React from "react";
import Add, { Mul, Sub } from "./calc";

const Calc=()=>{
    return(
        <ol>
            <h1>this is calc section</h1>
            <li>{Add(12,3)}</li>
            <li>{Mul(15,10)}</li>
            <li>{Sub(10,5)}</li>
        </ol>
    )
}   
export default Calc;