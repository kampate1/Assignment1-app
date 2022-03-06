import React, { useState } from "react";
import { ClothesList } from "../ClothesList/ClothesList";
import "bootstrap/dist/css/bootstrap.css"
export const AddClothes = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [clothes, setClothes] = useState([
    { id: "A2", name: "pants", price: "$50", description: "********", stock: "4" },
    { id: "A10", name: "top", price: "$30", description: "********", stock: "7" },
    { id: "A6", name: "hat", price: "$16", description: "********", stock: "15" },
  ])
  const add = () => {
    const existingItem = clothes.find((clothesItem) => clothesItem.name === name)
    if (existingItem){
      const newClothes = [...clothes];
      const item = newClothes.find((clothesItem) => clothesItem.name === name)
      for (let i = 0; i < stock; i++) {
        item.stock++
      }
      setClothes(newClothes)
      return (<ClothesList clothes/>);
    }
    else{
      setClothes([...clothes, {id: id, name: name, price: price, description: description, stock: stock  },])
      return (<ClothesList clothes/>);
    }
  }
  return (
    <div className="btn m-2">
        <ClothesList clothes={clothes}/>
        <h2>Add Clothes</h2>
        <table>
        <tr>
          <td> ID: &nbsp; </td>
          <td> <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}/></td> 
          </tr>
          <tr>
          <td> Name: &nbsp;</td>
          <td> <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}/></td>
          </tr>
          <tr>
          <td> Price: &nbsp; </td>
          <td> <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}/></td> 
          </tr>
          <tr>
          <td> Description: &nbsp;</td>
          <td> <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/></td>
          </tr>
          <tr>
          <td> Stock: &nbsp;</td>
          <td> <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}/></td>
          </tr>
      </table>
      <br/>
      <button 
      disabled={name.length === 0 || stock.length === 0 || id.length === 0} 
      onClick={add}>
        Add
      </button>
      
    </div>
  )
}
