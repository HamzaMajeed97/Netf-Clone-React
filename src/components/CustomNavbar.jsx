import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'


const CustomNavbar = () => {

return (
    <Navbar  style={{ backgroundColor: "black"}} >
    <Container>
    <Navbar.Brand >

        <img src= {Logo} style={{width: '100px', height: '55px'}} alt="logo" />
    </Navbar.Brand>
      <Nav  className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#tvshows">TV Shows</Nav.Link>
        <Nav.Link href="#recentlyadded">Recently Added</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)



}


export default CustomNavbar