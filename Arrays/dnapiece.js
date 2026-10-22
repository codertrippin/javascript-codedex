/* Let's use what we learned about arrays to build a DNA sequence! 🧬

DNA is made of the following four pieces:

Adenine (A)
Cytosine (C)
Guanine (G)
Thymine (T)
Collectively, these four pieces represent the unique genetic makeup of most life forms!

Create a 24-element myDNA array of that by randomly choosing one of these four pieces. Start with the following array:

const dnaPieces = ["A", "C", "G", "T"];

Inside a loop, to build the myDNA array by doing the following:

Get three random index numbers from dnaPieces with Math.floor() and Math.random().
Build a string of three letters by accessing the dnaPieces array elements with the three random index numbers.
Add this string to the myDNA array.
Lastly, log the myDNA array to the console.

The output may look like this:

[
  "TAG", "GAG", "ATA", "AAC",
  "AAT", "CTT", "AGG", "TAG",
  "ATC", "ACT", "GAG", "TTA",
  "CTG", "ACG", "GAC", "TCC",
  "GTA", "ACT", "GCA", "GTA",
  "GCG", "GCT", "TCT", "TAA"
] */

const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];

for (let i = 0; i < 24; i++) {
  // Get three random index numbers (0 to 3)
  const index1 = Math.floor(Math.random() * dnaPieces.length);
  const index2 = Math.floor(Math.random() * dnaPieces.length);
  const index3 = Math.floor(Math.random() * dnaPieces.length);

  // Build a string of three letters
  const triplet = dnaPieces[index1] + dnaPieces[index2] + dnaPieces[index3];

  // Add the string to the myDNA array
  myDNA.push(triplet);
}

// Log the myDNA array to the console
console.log(myDNA);