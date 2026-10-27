/*In this chapter, we're going to explore functions in JavaScript!

Functions are blocks of code that we write once and can use later on in our programs. They are useful for separating tasks into smaller chunks that can be executed multiple times via the function name.

Here's an example of a defined function that is used later on:

function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();

All functions in JavaScript use parentheses ( ), both when we create and use them.*/ 
function greetings() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber == 1) {
    console.log("Howdy!");
  } else if (randomNumber == 2) {
    console.log("Hi there!");
  } else if (randomNumber == 3) {
    console.log("Hey what's happening?");
  } else if (randomNumber == 4) {
    console.log("Hola!");
  } else {
    console.log("Heya!");
  }
}

greetings();
greetings();
greetings();