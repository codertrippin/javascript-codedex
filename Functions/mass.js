/*In 1905, Albert Einstein changed the world of physics with his theory of relativity. It transformed how we understand the relationship between space, time, and energy.

The most notable equation to come out of this theory was the following:

E
=
m
c
2
E=mc 
2
 
The 
E
E stands for energy, which is the product of the following:

m
m for mass, usually measured in kilograms (kg).
c
2
c 
2
  is the speed of light multiplied by itself.
Write a function called relativityTheory().

It should accept a single mass parameter that is an integer or decimal number.

And calculate the energy and return it. Don't forget to Google the speed of light!

Afterward, call the relativityTheory() function with a mass argument.*/

function relativityTheory(mass) {
  const speedOfLight = 3e8;
  const energy = mass * speedOfLight ** 2;
  return energy;
}

console.log(relativityTheory(44));