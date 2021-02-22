/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //access location
    var target = document.getElementById("target");
    //create table
    var table = document.createElement("table");
    //with un id
    table.id = ("myCreation");
    //add table to the location
    target.appendChild("table");
    
    var myElement = document.getElementById("myCreation"); 
    createElement("tr");
    tr.id = ("myRow");
    
    
})();
