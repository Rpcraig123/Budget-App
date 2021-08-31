import React from 'react'

function ExpenseHistory(props) {

  return (
    <div className='exp_hist'>
      <p className="expense">
        year: {props.year} Month: {props.month} Description: {props.description} Amount:{props.amount}{' '}
      </p>
    </div>
  )
}

export default ExpenseHistory;