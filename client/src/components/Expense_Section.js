import React, { useState, useEffect } from 'react'
import ExpenseHistory from "./Payment_History";
import axios from 'axios'
import { BASE_URL } from './globals'

function ExpenseSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res.data.expenses)
    setPosts(res.data.expenses)
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='exp_sect'>
      Expense Section
      <ExpenseHistory />
    </div>
  )
}

export default ExpenseSection;