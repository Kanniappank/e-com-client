import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, UseSelector } from 'react-redux';

function NavBar() {
  const user = useSelector((state: any) => state.userInfo.user)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Homo Shoppiens</Navbar.Brand>
        <Nav className="justify-content-end">
          {user && <>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link>logout  </Nav.Link>

          </>
          }
          {!user &&
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>}

        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
