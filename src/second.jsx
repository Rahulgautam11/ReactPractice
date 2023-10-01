import React, { useState } from "react";
import { useEffect } from "react";
import { ElectronicProductAPi } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";




const Second = () => {
    const disPatch = useDispatch();
    const { productdata } = useSelector((state) => {
        return {
            productdata: state.ElectronicProduct.product
        }
    })
    useEffect(() => {
        disPatch(ElectronicProductAPi())
    }, [])
    console.log('second component')
    return (
        <React.Fragment>
            <h1>fetch data using axios</h1>
            {

                productdata && productdata?.data?.length > 0 ?
                    productdata?.data?.map((item, key) => {
                        return (
                            <div key={key}>
                                <img src={item.image} width={300} height={300} alt="" />
                                <h2>{item.name}</h2>
                                <p>{item.company}</p>
                                <p>{item.price}</p>
                                <p>{item.description}</p>
                            </div>
                        )
                    }) : 'Loading...'
            }
        </React.Fragment>
    )
}

export default React.memo(Second);