import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"

export const Increament = (number) => {
    return {
        type: "Increament",
        payload: number
    }
}
export const Decreament = (number) => {
    return {
        type: "decreament",
        payload: number
    }
}

export const apiCall = (id) => async (dispatch) => {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
        dispatch({
            type: "api_call1",
            payload: response?.data
        })
    }
    catch (e) {
        console.log(e)
    }

}

export const ElectronicProductAPi = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.pujakaitem.com/api/products')
        dispatch({
            type: 'PRODUCT_API_ELE',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}