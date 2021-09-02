import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function PaymentForm(props) {

  const yearOnChange = (e) => {
    props.setYear(e.target.value)
  }
  const monthOnChange = (e) => {
    props.setMonth(e.target.value)
  }
  const descOnChange = (e) => {
    props.setDesc(e.target.value)
  }
  const amountOnChange = (e) => {
    props.setAmount(e.target.value)
  }

  return (
    <div className='add-pay'>
      <Container>
        <h3>{props.formType} Form</h3>
        <Form onSubmit={(e) => props.createNewPost(e, props.transType)}>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" placeholder="Enter Year" onChange={(e) => yearOnChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Month</Form.Label>
            <Form.Control type="text" placeholder="Enter Month" onChange={(e) => monthOnChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" onChange={(e) => descOnChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter Amount in USD" onChange={(e) => amountOnChange(e)}/>
          </Form.Group>
          <Button type="submit" variant="outline-primary">Submit</Button>
        </Form>
      </Container>
    </div>
  )
}

export default PaymentForm;