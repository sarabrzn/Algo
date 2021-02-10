/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    /* targets the markup with the Id "addition" and adds a click type event listener to activate the plus button and retrive the sum of operands 1 and 2. */
    document.getElementById("addition").addEventListener("click", () =>{
        // perform an addition
        //gets input value (operands 1 and 2)
        let op1 = Number(document.getElementById ("op-one").value);
        let op2 = Number(document.getElementById ("op-two").value);
        //displays the sum of the two operands
        alert(op1+op2);
    });
        
    document.getElementById("substraction").addEventListener("click", () =>{
        // perform an substraction
        let op1 = Number(document.getElementById ("op-one").value);
        let op2 = Number(document.getElementById ("op-two").value);
        /* displays the difference between operands 1 and 2 */
        alert(op1-op2);
    });
            
    document.getElementById("multiplication").addEventListener("click",() =>{
        // perform a multiplication
        let op1 = Number(document.getElementById ("op-one").value);
        let op2 = Number(document.getElementById ("op-two").value);
        //displays the product of the operands 1 and 2
        alert(op1*op2);
    });
        
    document.getElementById("division").addEventListener("click", () => {
         // perform a division
        let op1 = Number(document.getElementById ("op-one").value);
        let op2 = Number(document.getElementById ("op-two").value);
        /* displays the quotient between operand 1 and operand 2. */
        alert(op1/op2);
    });          
})();
