/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
   
    // your code here
        document.getElementById("run").addEventListener("click",()=>{
        //remove one element in the first position
        let removal1 = fruits.splice(0,1);
        // remove one element in the last position
        let removal2 = fruits.splice(8,1);
        /* adds "banane" to the first position. The second argument means that no elements are deleted */
        let addBanane = fruits.splice(0,0,"banane");
        // adds "kiwi" to the last position
        let addKiwi = fruits.splice(9,0,"kiwi");
        alert(fruits);
        // je ne sais rien afficher dans la console
        console.log(fruits);  
    });
})();
