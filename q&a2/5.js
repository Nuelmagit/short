//Hoisting: Declaration vs. Expression

greeting();
// Hello!

function greeting() {
    console.log("Hello!");
}


greeting();
// TypeError

var greeting = function greeting() {
    console.log("Hello!");
};



