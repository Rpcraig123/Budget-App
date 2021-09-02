import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

function Debt(props) {

  return (
    <div>
      <Card>
        <Card.Body>Total Debt = ${props.totalDebt}</Card.Body>
      </Card>
    </div>
  )
}

export default Debt;