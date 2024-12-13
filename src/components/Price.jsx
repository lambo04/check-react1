// Importation de la bibliothèque React
import React from "react";
// Importation de l'objet product depuis le fichier product.js
import product from "../product";

// Composant Price
const Price = () => <h3 id="price">{product.price}</h3>;

// Exportation du composant Price pour qu'il puisse être utilisé dans d'autres fichiers
export default Price;
