/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //recuperer balise #source
        let source = document.getElementById("source");
    //recuperer valeur de l'attribute "data-image" dans la balise #source
        let valeurAt = source.getAttribute("data-image");
    //créer balise image
        let img = document.createElement("img");
    //recuperer balise avec le id "target"(<figure>)
        target = document.getElementById("target");
    //injecter <img> dans <figure>
        target.appendChild(img);
    //recuper la valeur (link) et l'appliquer à <img>
        img.src = valeurAt;
    //supprimer balise source
        source.remove();
})();
