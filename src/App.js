
import './App.css';
import { useEffect, useState } from 'react';
import TableContainer from './components/TableContainer';
import Form from './components/BankForm';


function App() {
  const[Transactions, setTransactions]=useState([])
  useEffect (() => {
      fetch ("http://localhost:3000/transactions")
      .then(response => response.json ())
      .then(data => setTransactions(data))
      .catch((err)=>console.log(err))
      
    },[])
    
  function AddToForm(data){
    const newForm = [...Transactions, data]
    setTransactions(newForm)
  }
  return (
    <div className="App">
       <Form tableData={Transactions}
      AddToForm={AddToForm}/>
      <TableContainer tableData = {Transactions}/>
     
      
    </div>
  );
}

export default App;
