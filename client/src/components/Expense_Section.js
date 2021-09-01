import React, { useState, useEffect } from 'react'
import ExpenseHistory from "./Expense_History";
import axios from 'axios'
import { BASE_URL } from './globals'
import Table from 'react-bootstrap/Table'

function ExpenseSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)
  // const [totalExp, addExp] = useState(0)

  // export let expenseTotal

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setPosts(res.data.expenses)
    let expenses = res.data.expenses
    for (let i = 0; i < expenses.length; i++) {
      // expenseTotal += expenses[i].amount
    }
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='exp_sect'>
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