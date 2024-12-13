// Importation de la bibliothèque React
import React from "react";
// Importation de l'objet product depuis le fichier product.js
import product from "../product";

// Composant Name
const Name = () => <h2>{product.name}</h2>;

// Exportation du composant Name pour qu'il puisse être utilisé dans d'autres fichiers
export default Name;
