import { React, useState } from 'react';

const datalist = ['rahul', 'rajesh', "raju", "ramesh", 'rahul1', 'rajesh1', "raju1", "ramesh1"];


const Deleteitem = (() => {
    const [list, setlist] = useState(datalist)
    const [checkbox, setcheckbox] = useState([])

    const HandleDelete = (prev) => {
        let update = list.filter((item) =>  item !== prev
        )
        setlist(update)
        // console.log(i, "izzz")
        console.log(prev, "prev")
        console.log(update, "update")
    }

    const handlecheckbox = (item) => {
        if (!checkbox.includes(item)) {
            setcheckbox(pre => [...pre, item])
        } else {
            let checkupdate = list && checkbox.filter((e) =>  e !== item
            )
            setcheckbox(checkupdate)
        }

    }
    console.log(checkbox, 'check')
    return (
        <div>
            <ul>
                {
                    list.map((item, index) => {

                        return (
                            <li>
                                <input checked={checkbox.includes(item)} onChange={() => handlecheckbox(item)} type="checkbox" />
                                {item}
                                {checkbox.includes(item) ? <button onClick={() => HandleDelete(item)}>delete</button> : ""}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default Deleteitem;

// import { React, useState } from 'react';

// const datalist = [{id:1,name:'rahul'}, {id:2,name:'rajesh'}, {id:3,name:"raju"}, {id:4,name:"ramesh"}, {id:5,name:'rahul'}, {id:6,name:'rajesh'}, {id:7,name:"raju"}, {id:8,name:"ramesh"}];


// const Deleteitem = (() => {
//     const [list, setlist] = useState(datalist)
//     const [checkbox, setcheckbox] = useState([])

//     const HandleDelete = (prev) => {
//         let update = list.filter((item) =>  item !== prev
//         )
//         setlist(update)
//         // console.log(i, "izzz")
//         console.log(prev, "prev")
//         console.log(update, "update")
//     }

//     const handlecheckbox = (item) => {
//         if (!checkbox.includes(item)) {
//             setcheckbox(pre => [...pre, item])
//         } else {
//             let checkupdate = list && checkbox.filter((e) =>  e !== item
//             )
//             setcheckbox(checkupdate)
//         }

//     }
//     console.log(checkbox, 'check')
//     return (
//         <div>
//             <ul>
//                 {
//                     list.map((item, index) => {

//                         return (
//                             <li>
//                                 <input checked={checkbox.includes(item.id)} onChange={() => handlecheckbox(item.id)} type="checkbox" />
//                                 {item.name}
//                                 {checkbox.includes(item.id) ? <button onClick={() => HandleDelete(item)}>delete</button> : ""}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// })

// export default Deleteitem;