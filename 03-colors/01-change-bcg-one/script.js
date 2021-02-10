/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    /* targets the 4 colors Ids and adds a click as event listener to activate each button */
    document.getElementById("red").addEventListener("click",
        ()=>{
            //function that will turn the color of the body (background color) into red
        document.body.style.background = "red";
        })
        //same thing for green
    document.getElementById("green").addEventListener("click",
        ()=>{
        document.body.style.background = "green";
        })
        //yellow
    document.getElementById("yellow").addEventListener("click",
        ()=>{
        document.body.style.background = "yellow";
        })
        //and blue background
    document.getElementById("blue").addEventListener("click",
        ()=>{
        document.body.style.background = "blue";
        })
    
})();
