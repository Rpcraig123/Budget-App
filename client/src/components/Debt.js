import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

function Debt(props) {

  return (
    <div>
      <Card>
        <Card.Body>Total Debt = ${props.totalDebt}</Card.Body>
      </Card>
      {/* <h2>Total Debt = ${props.totalDebt}</h2> */}
    </div>
  )
}

export default Debt;