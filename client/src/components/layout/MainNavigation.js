import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function MainNavigation() {
  return (
    <header>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar.Brand>Budget App</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add-expense">Add Expense</Nav.Link>
              <Nav.Link href="/add-payment">Add Payment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default MainNavigation;