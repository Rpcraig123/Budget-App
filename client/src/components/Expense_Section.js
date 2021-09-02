import React, { useState, useEffect } from 'react'
import ExpenseHistory from "./Expense_History";
import axios from 'axios'
import { BASE_URL } from './globals'
import Table from 'react-bootstrap/Table'
import Debt from './Debt';

function ExpenseSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)
  const [debt, setDebt] = useState(0)
  

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setPosts(res.data.expenses)
    let expenses = res.data.expenses
    let payments = res.data.payments
    let totalDebt = 0
    let paymentTotal = 0
    let expenseTotal = 0
    for (let i = 0; i < expenses.length; i++) {
      expenseTotal += expenses[i].amount
    }
    for (let i = 0; i < payments.length; i++) {
      paymentTotal += payments[i].amount
    }
    if (expenseTotal > paymentTotal) {
      totalDebt = expenseTotal - paymentTotal
    }
    else {
      totalDebt = 0
    }
    setDebt(Math.abs(totalDebt.toFixed(2)))
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='exp_sect'>
      <Debt
        totalDebt={debt}
      />
      <h2>Expenses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((result) => (
                <ExpenseHistory
                  key={result._id}
                  id={result._id}
                  year={result.year}
                  month={result.month}
                  description={result.description}
                  amount={result.amount}
                  request={request}
                  changeIt={changeIt}
                />
              ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ExpenseSection;