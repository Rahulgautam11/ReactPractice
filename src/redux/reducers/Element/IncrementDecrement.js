let initialstate = 0;
export const IncreamentDecrement = (state = initialstate, action) => {
    switch (action.type) {
        case "Increament":
            return state + action.payload

        case "decreament": return state + action.payload
        default: return state;
    }

}



// let apiInitialState = {
//     apiData1: {
//         data: []
//     },
//     apiData2: {
//         data: []
//     },
//     apiData3: {
//         data: []
//     }
// }
// export const API = (state = apiInitialState, action) => {
//     switch (action.type) {
//         case "api_call1":
//             return {
//                 ...state,
//                 apiData1: {
//                     data: action.payload,
//                 }
//             }


//         default: return state;
//     }

// }
