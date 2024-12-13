// Importation de la bibliothèque React
import React from "react";
// Importation de l'objet product depuis le fichier product.js
import product from "../product";

// Composant Description
const Description = () => <p>{product.description}</p>;

// Exportation du composant Description pour qu'il puisse être utilisé dans d'autres fichiers
export default Description;
