/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //activates the button "lancer le script"
    document.getElementById("run").addEventListener("click", ()=>{
        
        
        for( let month = 0; month < 12; month++){
            let inputYear = new Date(document.getElementById("year").value);
            let date = new Date (inputYear,month,13);
            let friday = date.setDay(5);
            if(friday = true){
                alert(month);
            }
        }   
    });   
})(); 

    



