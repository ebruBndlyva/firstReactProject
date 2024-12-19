import products from '../students'

import React, { useState } from 'react'

function State() {
    const [originalProducts] = useState(products);
    let [myproducts, setMyProduct] = useState(products)
    let [ProductName, setProductName] = useState("")
    let [ProductPrice, setProductPrice] = useState(0)


    function handleSubmit(e) {
        e.preventDefault()
        let newProduct = {
            id: myproducts.length + 1,
            name: ProductName,
            price: ProductPrice

        }
        setMyProduct([...myproducts, newProduct])
        setProductName("")
        setProductPrice(0)

    }
    function handleDelete(id) {
        let filterProduct = myproducts.filter((filproduct) => filproduct.id != id)
        setMyProduct(filterProduct)
    }
    function handleClear() {
        setMyProduct([])
    }
    function handleSearch(inputValue) {
        if (inputValue.trim() === "") {
            setMyProduct(originalProducts);
        } else {
            const filteredData = originalProducts.filter(({ name }) =>
                name.toLowerCase().includes(inputValue.trim().toLowerCase())
            );
            setMyProduct(filteredData);
        }
    }
    function handleSort(selectValue) {

        let sortProduct;
        switch (selectValue) {
            case "A - z":
                sortProduct = myproducts.toSorted((a, b) => a.name.localeCompare(b.name))
                break;
            case " z - A":
                sortProduct = myproducts.toSorted((a, b) => b.name.localeCompare(a.name))
                break;
            case "evvelce Ucuz":
                sortProduct = myproducts.toSorted((a, b) => a.price - b.price)
                break;
            case "evvelce bahali":
                sortProduct = myproducts.toSorted((a, b) => b.price - a.price)
                break;
            default:
                sortProduct=[...originalProducts]
        }
        setMyProduct(sortProduct)

    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={ProductName} onChange={(e) => setProductName(e.target.value)} placeholder='product name' />
                <input type="number" value={ProductPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder='price' />
                <button type='submit'>Add</button>
            </form>
            <select onChange={(e) => handleSort(e.target.value)}>
                <option value="defalut">Default</option>
                <option value="A-z">A-z</option>
                <option value="z-A">z-A</option>
                <option value="evvelce Ucuz">Evvelce ucuz</option>
                <option value="evvelce bahali">Evvelce bahali</option>
            </select>
            <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder='Search' />
            <ul>
                {
                    myproducts.map(product => (
                        <li key={product.id}>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </li>

                    ))
                }
            </ul>
            <button onClick={() => handleClear()}>Clear</button>
        </div>
    )
}

export default State
