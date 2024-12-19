import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  let myProduct = []
  let [product, setProduct] = useState(myProduct)
  let [show, setShow] = useState(true)
  let [name, setName] = useState("")
  let [price, setPrice] = useState(0)

  useEffect(() => {
    getData()
  }, [])
  function getData() {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        myProduct = res.data
        setProduct(myProduct)
        setShow(false)
      })
      .catch(err => {
        console.log(err)
      })

  }
  async function deleteData(id) {
   
    await axios.delete("https://northwind.vercel.app/api/products/" + id)
    let filtered = product.filter((prod) => prod.id != id)
    setProduct(filtered)



  }

  async function handleSubmit(e) {
    e.preventDefault()
    let newProduct = {
      id: product.length + 1,
      name: name,
      unitPrice: price
    }
    let result = await axios.post(("https://northwind.vercel.app/api/products"), newProduct)
    setProduct([...product, newProduct])
  

  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />

        <input type="number" value={price} placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        <button>Add</button>
      </form>
      {show ? (<div className="loader"></div>) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (

              <tr key={item.id} style={{ color: item.discontinued ? "red" : item.unitPrice > 10 ? "green" : "black" }}>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td><button onClick={() => deleteData(item.id)}>del</button></td>
              </tr>

            ))}
          </tbody>
        </table>
      )}



    </>
  )
}

export default App
