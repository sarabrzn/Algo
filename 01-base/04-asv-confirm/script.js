/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
userName=prompt("How old are you?");
userSex=prompt("Are you a male or a female?");
userCity=prompt("Which city do you live in?");
/* 
While the user does not confirm, he will be asked the questions, after being told that the previous ones were cancelled. */
while (confirm("confirm?")!==true) {
    alert("Cancelled!");
    prompt("How old are you?");
    prompt("Are you a male or a female?");
    prompt("Which city do you live in?");
}
/* The confirmation ends the loop and the program will let the user know that his answers were saved. */
alert("Saved!");
})();




