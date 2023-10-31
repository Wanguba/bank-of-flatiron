import React, { useState } from 'react';

function Form({ AddToForm }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  function amountChange(e){
    setAmount(e.target.value)
  }
  function dateChange(e){
    setDate(e.target.value)
  }
  function descriptionChange(e){
    setDescription(e.target.value)
  }
  function categoryChange(e){
    setCategory(e.target.value)
  }
 

  function handleSubmit (e){
    e.preventDefault();
      const inputData = {date:date, category: category, description: description, amount: amount};
      fetch ("http://localhost:3000/transactions",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(inputData)
    })
          .then ( response =>response.json())
          .then (data => AddToForm(data))
            setDate("")
            setCategory("")
            setDescription("")
            setAmount("")
    
  }

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={dateChange}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={categoryChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={descriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={amountChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;