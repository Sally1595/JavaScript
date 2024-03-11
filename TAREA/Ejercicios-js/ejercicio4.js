// Starting array
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Print out all people in the list
console.log(people);

// 2. Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);

// 3. Remove "Juan" from the array
people.splice(people.indexOf("Juan"), 1);

// 4. Move "Luis" to the front of the array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 5. Add your name to the end of the array
let yourName = "YourName";
people.push(yourName);

// 6. Using a loop, iterate through the array and exit after console.log "Maria"
for (let person of people) {
  console.log(person);
  if (person === "Maria") {
    break;
  }
}

// 7. Find the indexOf where "Maria" is located
let mariaIndex = people.indexOf("Maria");

// Output the index
console.log("Index of Maria:", mariaIndex);

// At the end of the exercise, there should be 4 people in the array
console.log(people);
