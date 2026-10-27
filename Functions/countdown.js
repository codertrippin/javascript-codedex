/*Let's practice defining functions by making a countdown timer!

Define a countdown() function with the function keyword. Then, let's add the following to the function body:

A loop that iterates down from that 10 to 1.
Inside the loop, print the current number.
Outside the loop, return the string "Blast Off! 🚀"
Lastly, call the countdown() function and remember to log it to the console!*/

// Write code below 💖
// function helloWorld() {
//   return "Hello, World! 🌎";
// }

// console.log(helloWorld());

function countdown(){
  for(let i=10;i>=1;i--){
    console.log(i);
  }
  return "Blast Off! 🚀"
}

console.log(countdown());