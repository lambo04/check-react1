// Importation de la bibliothèque React
import React from "react";
// Importation de l'objet product depuis le fichier product.js
import product from "../product";

// Composant Image
const Image = () => (
  <img 
    src={product.image} // URL de l'image extraite de l'objet product
    alt={product.name} // Nom du produit utilisé comme texte alternatif pour l'accessibilité
    style={{ width: "100%" }} // Style appliqué pour que l'image prenne 100% de la largeur du conteneur
  />
);

// Exportation du composant Image pour qu'il puisse être utilisé dans d'autres fichiers
export default Image;
