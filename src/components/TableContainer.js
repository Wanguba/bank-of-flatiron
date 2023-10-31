//TableContainer.js
import React, { useState } from 'react';

function TableContainer({ tableData }) {
  const[search, setSearch]=useState("")
  return (
  
    <div>
      <form>
        <input type="search" placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
      </form>
       <table>
       <tr>
         <th>Date</th>
         <th>Description</th>
         <th>Category</th>
         <th>Amount</th>
       </tr>
       {tableData.filter((item)=>{
        return search.toLowerCase() === ""?
        item:item.description.toLowerCase().includes(search)
       }).map((data) => (
        
       <tr>
         <td>{data.date}</td>
         <td>{data.description}</td>
         <td>{data.category}</td>
         <td>{data.amount}</td>
       </tr>
         
       ))}
</table> 
    </div>
    
  );
}

export default TableContainer;