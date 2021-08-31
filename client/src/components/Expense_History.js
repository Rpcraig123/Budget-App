import React from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

function ExpenseHistory(props) {

  const deletePost = async (e) => {
    e.preventDefault()
    await axios.delete(`${BASE_URL}/remove-expense/${props.id}`)
    props.request ? props.changeIt(false) : props.changeIt(true)
  }

  return (
    <div className='exp_hist'>
      <p className="expense">
        year: {props.year} Month: {props.month} Description: {props.description} Amount: ${props.ammount}{' '} <button onClick={deletePost}>Delete</button>
      </p>
    </div>
  )
}

export default ExpenseHistory;