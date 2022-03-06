import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
export const ClothesList=({clothes}) =>{

    
  const clothesList = clothes;
  
  return (
    <div className="btn m-2">
        <h2> Inventory </h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {clothesList.map(({id, name, price, description, stock}, index) => (
              <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                  <td>{stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
