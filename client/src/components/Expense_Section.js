import React, { useState, useEffect } from 'react'
import ExpenseHistory from "./Expense_History";
import axios from 'axios'
import { BASE_URL } from './globals'

function ExpenseSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setPosts(res.data.expenses)
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='exp_sect'>
      Expenses
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
    </div>
  )
}

export default ExpenseSection;