import React, {useState} from 'react'
import './style.css'


export default function Working({account}) {

const [monthlyPayment, setMonthlyPayment] = useState('');
const [balanceHistory, setBalanceHistory] = useState([])



  return (
    <div>
        <h2>Working Model</h2>
        <label>Monthly Payment:
            <input 
            type="number"
            placeholder='Enter monthly payment'
            value={monthlyPayment} 
            onChange={(e) => setMonthlyPayment(e.target.value)}
            />
        </label>
        <div>
            
        </div>
    </div>
  )
}
