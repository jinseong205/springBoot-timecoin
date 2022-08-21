import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Link to="/" className="navbar-brand">TimeCoin</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link className="nav-link" to="/book/List">HOME</Link>
            <Link className="nav-link" to="/book/saveForm">WRITE</Link>
            <Link className="nav-link" to="/member/joinForm">SIGN IN</Link>
            <Link className="nav-link" to="/member/loginForm">LOGIN</Link>
            

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;