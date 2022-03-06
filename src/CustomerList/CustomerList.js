import React, { useState } from "react";
import { AddClothes } from "../AddClothes/AddClothes";
import "./CustomerList.css";
import { RoleWrapper } from "../RoleWrapper/RoleWrapper";
import { ClothesList } from "../ClothesList/ClothesList";
import "bootstrap/dist/css/bootstrap.css"
import {useNavigate} from "react-router-dom";


export const CustomerList = ({role}) => {
  const [search, setSearch] = useState("");
    const [clothes, setClothes] = useState([
      { id: "A2", name: "pants", price: "$50", description: "********", stock: "4" },
      { id: "A10", name: "top", price: "$30", description: "********", stock: "7" },
      { id: "A6", name: "hat", price: "$16", description: "********", stock: "15" },
    ])
    const filter = () => {
      const existingItem = clothes.find((clothesItem) => clothesItem.name.toLowerCase().includes(search.toLowerCase()))
      if (existingItem){
        const newClothes = [...clothes];
        const item = newClothes.find((clothesItem) => clothesItem.name.toLowerCase().startsWith(search.toLowerCase()))
        setClothes([{id: item.id, name: item.name, price: item.price, description: item.description, stock: item.stock  },])
        return (<ClothesList item/>);
      }
      /* studentList.filter(student => student.name.startsWith('name')*/
    }
    const reset = () => {
      setClothes([
        { id: "A2", name: "pants", price: "$50", description: "********", stock: "4" },
        { id: "A10", name: "top", price: "$30", description: "********", stock: "7" },
        { id: "A6", name: "hat", price: "$16", description: "********", stock: "15" },
      ])
      return (<ClothesList clothes={clothes}/>)
    }

  const navigate = useNavigate();
  const move= () => {
    navigate("/");
  }
  return (
    <div className="btn lg">
      <RoleWrapper rolesAllowed={['Admin']} currentRole={role}>
        <AddClothes/>
      </RoleWrapper>
      <RoleWrapper rolesAllowed={['Visitor']} currentRole={role}>
        <ClothesList clothes={clothes}/>
        <br/>
      Search: &nbsp;<input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        <br/>
        <button className="m-2"
        disabled={search.length === 0} 
        onClick={filter}>
          Filter
        </button>
        <button 
        onClick={reset}>
          Reset
        </button>
        <br/>
        
      </RoleWrapper>
    <br/>
      <button 
      onClick={move} >
        Go Back To Login
      </button>
      
    </div>
  );
};
