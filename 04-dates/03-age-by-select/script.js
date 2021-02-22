/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        //fonction pour calculer l'age exact de l'utilisateur quand il click le boutton "lancer le script"
        //retrieves from HTML the day, month and year of birth of the user
        let birthDay = document.getElementById("dob-day","dob-month","dob-year").value;
        
        //current day, month and year
        let currentDate = new Date();
        let today = currentDate.getDate() + currentDate.getMonth + currentDate.getFullYear;
        
        //calculation of user's age
        let age = calculateAge(today,birthday);   
        alert(age);
    });

})();
