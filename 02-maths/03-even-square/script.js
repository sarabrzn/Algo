/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => { 
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        /* every time the loop runs, the value of i is incremented by 1 */
        for (i=1; i<=21;i++){
            /* The condition for a number to be displayed is to be pair. When a number is pair, the remainder of its division by 2 is equal to zero.
             */
            if(i%2==0){
            /* This line of code will display the squares of all pair numbersn from 1 to 21 */
            alert("number " + i + " is pair, and its square is " + i*i); 
                
            }
        }
              
    });
    
})();
