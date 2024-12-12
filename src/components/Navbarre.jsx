import React from 'react'
import { Nav,Container,Navbar } from 'react-bootstrap'
const Navbarre = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">watch store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">product</Nav.Link>
            <Nav.Link href="#price">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarre
