/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //survol de l'image
    document.addEventListener("mouseover",() =>{ 
        //recuperer img
        let img = document.getElementsByTagName("img")[0];
        //recuperer valeur de src
        let src = img.getAttribute("src");
        //recuperer valeur de data-hover
        let hoverValue = img.getAttribute("data-hover");
        //remplacer la valeur de la source par hoverValue
        img.src = hoverValue;            
    });   
})();
