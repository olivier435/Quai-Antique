export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;

    }

}

export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La galerie", "./pages/galerie.html"),
];