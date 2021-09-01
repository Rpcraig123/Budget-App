import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MainNavigation() {
  return (
    <header>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>Credit Card Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add-expense">Add Expense</Nav.Link>
            <Nav.Link href="/add-payment">Add Payment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default MainNavigation;