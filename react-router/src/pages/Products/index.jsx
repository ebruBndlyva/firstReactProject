import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    let [products, setProducts] = useState([]);

    function getProducts() {
        axios.get("https://northwind.vercel.app/api/products")
        .then(res=>{
            setProducts(res.data)
        })
    }
useEffect(()=>{ getProducts()},[])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>UnitStock</th>
                        <th>Detail</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Link to={`/products/${product.id}`} className='btn btn-primary'>Detail</Link></td>
                        </tr>
                    ))}
                  
                </tbody>
            </Table>
        </div>
    )
}

export default Products
