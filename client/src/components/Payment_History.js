import React from 'react'

function PaymentHistory(props) {
  return (
    <div className='pay_hist'>
      <p className="payment">
        year: {props.year} Month: {props.month} Description: {props.description} Amount:{props.amount}{' '}
      </p>
    </div>
  )
}

export default PaymentHistory;