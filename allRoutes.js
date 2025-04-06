import Route from "./Route.js"; // ✅ Assure-toi que ce fichier est dans le même dossier que Route.js

// ✅ Liste des routes disponibles dans ton application SPA
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),

];


// ✅ Nom du site utilisé dans les titres de pages dynamiques
export const websiteName = "Quai Antique";

