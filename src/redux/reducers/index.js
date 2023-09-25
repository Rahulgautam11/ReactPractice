import { combineReducers } from "redux";
import { IncreamentDecrement } from "./Element/IncrementDecrement";
import { ElectronicProduct } from "./Element/ElectronicApi";


const rootReducer = combineReducers({
    IncreamentDecrement,
    ElectronicProduct


})
export default rootReducer;