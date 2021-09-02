import React from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import Button from 'react-bootstrap/Button'

function TransactionHistory(props) {

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
      <td><Button variant="danger" onClick={deletePost}>Delete</Button></td>
    </tr>
  )
}

export default TransactionHistory;