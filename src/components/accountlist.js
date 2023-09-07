import React, {useState} from 'react'
import './style.css'

export default function AccountList() {
const [account, setAccount] = useState([])
const[newBalance, setNewBalance] = useState('')

const addAccount = () => {
    if(newBalance) {
        setAccount([...account, {balance: parseFloat(newBalance)}])
setNewBalance('');
    }
}
  return (
    <div>
        <h2>Account List</h2>
        <ul>
            {account.map((account, index) => (
                <li key={index}>Balance: {account.balance}</li>
            ))}
        </ul>

        <input type="number"
        placeholder='Enter balance'
        value={newBalance}
        onChange={(e) => setNewBalance(e.target.value)} 
        />
        <button onClick={addAccount}>Add Acccount</button>
    </div>
  )
}
