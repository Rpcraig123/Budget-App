// import { Link } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function MainNavigation() {
  return (
    <header>
      {/* <Navbar className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to='/' className="navbar-brand">Home</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/add-expense' className="nav-link">Add Expense</Link>
            </li>
            <li className="nav-item">
              <Link to='/add-payment' className="nav-link">Add Payment</Link>
            </li>
          </ul> 
        </div>
      </Navbar> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="Title">Budget App</div> */}
    </header>
  )
}

export default MainNavigation;