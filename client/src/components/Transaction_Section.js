import React, { useState, useEffect } from 'react'
import TransactionHistory from "./Transaction_History";
import axios from 'axios'
import { BASE_URL } from './globals'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Debt from './Debt';

function ExpenseSection() {

  const [posts, setPosts] = useState([])
  const [pay_posts, setPayPosts] = useState([])
  const [request, changeIt] = useState(false)
  const [debt, setDebt] = useState(0)
  

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setPosts(res.data.expenses)
    setPayPosts(res.data.payments)
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
    <div>
      <div className="debt_sect">
        <Debt
          totalDebt={debt}
        />
      </div>
      <div className='exp_sect'>
        <Container>
        <h2>Expenses</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Description</th>
              <th>Amount</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((result) => (
                  <TransactionHistory
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
        </Container>
      </div>
      <div className='exp_sect'>
        <Container>
        <h2>Payments</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Description</th>
              <th>Amount</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {pay_posts.map((result) => (
                  <TransactionHistory
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
        </Container>
      </div>
    </div>
  )
}

export default ExpenseSection;