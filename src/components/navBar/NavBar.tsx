import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, UseSelector } from 'react-redux';
import { constants } from '../../constants/index'
import { FaSearch } from "react-icons/fa";


function NavBar() {
  const user = useSelector((state: any) => state.userInfo.user)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">{constants.projectTitle}</Navbar.Brand>
        <Nav className="justify-content-end">
          {user.role == 1 && <>
            <Nav.Link as={Link} to="/home">Manage Sellers</Nav.Link>
            <Nav.Link as={Link} to="/home">Manage Buyers</Nav.Link>
            <Nav.Link as={Link} to="/home">Manage Profile</Nav.Link>
            <Nav.Link>logout</Nav.Link>
          </>}
          {user.role == 2 && <>
            <Nav.Link as={Link} to="/home">Manage Products</Nav.Link>
            <Nav.Link as={Link} to="/home">Manage Profile</Nav.Link>
            <Nav.Link>logout</Nav.Link>
          </>}
          {user.role == 3 && <>
          <div className='d-flex'>
            <input placeholder="Search Products" className='form-control' />
            <button type="button" className="btn btn-primary"><FaSearch /></button>
            </div>

            <Nav.Link>logout</Nav.Link>
          </>}
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
