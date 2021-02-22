/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
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
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        /* not i<= fruits.length because of the incrementation. If i<=fruits.length, there would be one more loop for index 12, which does not exist, since the length=11 */
        for(i=0;i<fruits.length;i++){
        // I still can't manage to put the results in the console
        // console.log(fruits[i]);
        alert(fruits[i]);
    }
    });
})();
