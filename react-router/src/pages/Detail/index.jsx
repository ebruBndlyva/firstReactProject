import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
function Detail() {
    let { id } = useParams()

    let [myproduct, setMyProduct] = useState({})
    function getDetail() {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                setMyProduct(res.data)
             
            })
    }
    useEffect(() => { getDetail() }, [id])


    return (
        <div>
            <h1>{myproduct.name}</h1>
            <h2>{myproduct.unitsInStock}</h2>
            <h3>{myproduct.unitPrice}</h3>
        </div>
    )
}

export default Detail
