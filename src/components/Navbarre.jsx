// Importation de la bibliothèque React
import React from 'react';
// Importation des composants nécessaires de React-Bootstrap
import { Nav, Container, Navbar } from 'react-bootstrap';

// Composant Navbarre
const Navbarre = () => {
  return (
    <div>
      {/* Barre de navigation avec un thème sombre */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* Marque de la barre de navigation avec un lien vers #home */}
          <Navbar.Brand href="#home">watch store</Navbar.Brand>
          {/* Liens de navigation alignés à gauche */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link> {/* Lien vers la section "Home" */}
            <Nav.Link href="#product">product</Nav.Link> {/* Lien vers la section "Product" */}
            <Nav.Link href="#price">Pricing</Nav.Link> {/* Lien vers la section "Pricing" */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// Exportation du composant Navbarre pour qu'il puisse être utilisé dans d'autres fichiers
export default Navbarre;
