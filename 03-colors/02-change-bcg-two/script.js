/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //instead a button for each color, we have a global button
    document.getElementById("run").addEventListener("click",
    function(){
        //create variable color to store the colors the user inputs
        let color = document.getElementById("color").value;
        document.body.style.backgroundColor = color; //The background color will have the color the user inputs

    })
})();
