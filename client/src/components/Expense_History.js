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
    <tr>
      <td>{props.year}</td>
      <td>{props.month}</td>
      <td>{props.description}</td>
      <td>${props.amount}</td>
      <td><button onClick={deletePost}>Delete</button></td>
    </tr>
  )
}

export default ExpenseHistory;