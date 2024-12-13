import React from "react"; // Importation de la bibliothèque React
import "bootstrap/dist/css/bootstrap.min.css"; // Importation des styles Bootstrap
import { Card, Button } from "react-bootstrap"; // Importation des composants Card et Button de React-Bootstrap
import Name from "./components/Name"; // Importation du composant Name
import Price from "./components/Price"; // Importation du composant Price
import Description from "./components/Description"; // Importation du composant Description
import Image from "./components/Image"; // Importation du composant Image
import Navbarre from "./components/Navbarre"; // Importation du composant Navbarre (barre de navigation)
import "./App.css"; // Importation des styles personnalisés

const App = () => {
  const firstName = "omar"; // Déclaration d'une variable pour le prénom de l'utilisateur

  return (
    <div 
      className="App" 
      style={{
        // Ajout d'une image de fond via une URL
        backgroundImage: 'url(https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D)'
      }}
    >
      <Navbarre /> {/* Barre de navigation */}
      <br />
      <div 
        className="carte" 
        id="product" 
        style={{ 
          display: "flex", 
          justifyContent: "space-between" // Alignement des cartes
        }}
      >
        {/* Carte principale contenant les détails du produit */}
        <Card 
          id="cart" 
          style={{ 
            width: "18rem", 
            margin: "0 auto" // Centrage de la carte
          }}
        >
          <Card.Body>
            <Image /> {/* Composant pour afficher l'image du produit */}
            <Name /> {/* Composant pour afficher le nom du produit */}
            <Price /> {/* Composant pour afficher le prix du produit */}
            <Description /> {/* Composant pour afficher la description du produit */}
          </Card.Body>
        </Card>
      </div>

      {/* Message de bienvenue personnalisé selon la présence du prénom */}
      <h3 id="welcome">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>

      {/* Image affichée seulement si le prénom est défini */}
      {firstName && (
        <img 
          src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Greeting" 
        />
      )}

      {/* Footer contenant des informations sur le site */}
      <Card className="footer">
        <Card.Header>welcome!!!</Card.Header> {/* En-tête du footer */}
        <Card.Body>
          <Card.Title>watch store</Card.Title> {/* Titre du footer */}
          <Card.Text>
            &copy;watchstore@gmail.com {/* Adresse email affichée dans le footer */}
          </Card.Text>
          <Button 
            variant="primary" 
            href="#home" 
            className="btn"
          >
            Go home {/* Bouton pour revenir à la section Home */}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App; // Exportation du composant App pour pouvoir l'utiliser dans d'autres fichiers

