import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"

export const FilterClothes = ({clothe}) => {
  const [search, setSearch] = useState("");
  const clothesList = clothe;
  return (
    <div className="btn m-2">
      Search: &nbsp;<input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      {clothesList.filer((val, key)=> {
        if (search === "") {
          return val
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div> <p>val.name</p> </div>
      })}
    </div>
  )
}
      