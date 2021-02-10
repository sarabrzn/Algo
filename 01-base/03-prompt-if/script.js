/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //prompt to offer cake to the user.
    giveCake = prompt ("Would you like to have a bit of this delicious cake?")
    //if he accepts, he will be praised
    if(giveCake=="ok" || giveCake=="yes" || giveCake=="yes,please"){
        alert("Congratulations, you've just got a little bit of heaven!");
    //otherwise he will get a word of disapproval
    }else {
        alert("Really...?");
    }

})();
 

