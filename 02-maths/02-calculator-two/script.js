/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // to get the value of an input: document.getElementById("element-id").value   
    function performOperation(operation) {
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        // perform the operation
        switch (operation) {
            case "addition":
                alert(op1+op2);
                break;
            case "substraction":
                alert(op1-op2);
                break;
            case "multiplication":
                alert(op1*op2);
                break;
            case "division":
                alert(op1/op2);
                break;
        }
    }

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();
