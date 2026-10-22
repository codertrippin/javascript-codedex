/*For this exercise, we will practice using the .indexOf() and .includes() methods with a variation of the notable "Where's Waldo?" children's books.

Copy and paste the following array in an index.js file:

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

Next, write a conditional statement with the following logic:

If our characters array includes an element with the value "Waldo", do this:
Save the index of the "Waldo" element in a new variable called waldoIndex.
Then use console.log() to display "Found Waldo at index {indexNumber}!" (e.g., "Found Waldo at index 3").
Else, log "Not found" to the console. */

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];
let waldoIndex = characters.indexOf("Waldo");
if(characters.includes("Waldo")){
  console.log("Found Waldo at index " + characters.indexOf("Waldo"));
}
else{
  console.log("Not found")
}
