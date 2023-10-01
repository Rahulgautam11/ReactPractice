import React, { useEffect, useState } from "react";
// import Second from "./second";

const First = () => {
    const [dataInfo, setdataInfo] = useState([])
    const [count, setcount] = useState(1)

    const Api = 'https://hn.algolia.com/api/v1/search?query=html'

    const GetData = async (url) => {
        try {
            const response = await fetch(url)
            const JsonData = await response.json()
            setdataInfo(JsonData)
            console.log(JsonData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetData(Api)

    }, [])

    const Handleclickbtn = () => {
        setcount(count + 1)
    }

    return (
        <>
            {
                dataInfo?.hits ?
                    <div>
                        <button onClick={Handleclickbtn}>click</button>
                        {count}
                        {
                            dataInfo?.hits?.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <h2>{item.author}</h2>
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div> : "Loading..."
            }
            jdssdsjdnskjd
        </>
    )
}
export default First;