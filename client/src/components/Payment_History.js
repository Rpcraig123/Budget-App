import React from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

function PaymentHistory(props) {

  const deletePost = async (e) => {
    e.preventDefault()
    await axios.delete(`${BASE_URL}/remove-payment/${props.id}`)
    props.request ? props.changeIt(false) : props.changeIt(true)
  }

  return (
    <div className='pay_hist'>
      <p className="payment">
        year: {props.year} Month: {props.month} Description: {props.description} Amount: ${props.amount}{' '} <button onClick={deletePost}>Delete</button>
      </p>
    </div>
  )
}

export default PaymentHistory;