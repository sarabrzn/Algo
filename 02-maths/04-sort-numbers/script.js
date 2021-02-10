/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        const numbers = document.getElementById("numbers").value; //this variable is a string 
        const arrayNumbers = numbers.split(',');//which will be split to form an array
        const orderedNumbers = arrayNumbers.sort((a,b) => a-b); //whose elements will be sorted in ascending order
        alert(orderedNumbers); //and then displayed  
    });    
})();
