/*The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

It's an oversized 8 ball with some of the following answers:

Yes - definitely.
It is decidedly so.
Without a doubt.
Reply hazy, try again.
Ask again later.
Better not tell you now.
My sources say no.
Outlook not so good.
Very doubtful.
Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

The output should have the following format:

Question:       [Question]
Magic 8 Ball:   [Answer]

For example:

Question:       Is Codédex better than Udemy yet?
Magic 8 Ball:   Better not tell you now. */

console.log("Question:       Is Codédex better than Udemy yet?");
let ball= Math.floor(Math.random()*10); //0-9
if(ball===0){
  console.log("Magic 8 Ball:   Yes - definitely.");
}
else if(ball===1){
  console.log("Magic 8 Ball:   It is decidedly so.");
}
else if(ball===2){
  console.log("Magic 8 Ball:   Without a doubt.");
}
else if(ball===3){
  console.log("Magic 8 Ball:   Reply hazy, try again.");
}
else if(ball===4){
  console.log("Magic 8 Ball:   Ask again later.");
}

else if(ball===5){
  console.log("Magic 8 Ball:   Better not tell you now.");
}
else if(ball===6){
  console.log("Magic 8 Ball:   My sources say no.");
}
else if(ball===7){
  console.log("Magic 8 Ball:   Outlook not so good.");
}
else if(ball===8){
  console.log("Magic 8 Ball:   Very doubtful.");
}
else{
  console.log("Magic 8 Ball:   Roll again!");
}