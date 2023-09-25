import React from "react";
import './style.scss'
import { Increament, Decreament, apiCall } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const IncreamentDecrement = () => {
    const { count } = useSelector((item) => {
        return {
            count: item.IncreamentDecrement,

        }
    })
    const dispatch = useDispatch()
    const HandleIncreament = () => {
        dispatch(Increament(5))
    }
    const HandleDecreament = () => {
        dispatch(Decreament(2))
    }

    const apiCallComponnet = () => {
        dispatch(apiCall(2))
    }

    return (
        <div className="main">
            <div className="sub-main">
                <button onClick={() => HandleDecreament()}>-</button>
                <h1>{count}</h1>
                <button onClick={() => HandleIncreament()}>+</button>

                <button onClick={() => apiCallComponnet()}>APICALL</button>
            </div>
        </div>
    )
}
export default IncreamentDecrement