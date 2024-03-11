let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(people.indexOf("Dani"), 1);

people.splice(people.indexOf("Juan"), 1);

people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

let yourName = "YourName";
people.push(yourName);

for (let person of people) {
  console.log(person);
  if (person === "Maria") {
    break;
  }
}

let mariaIndex = people.indexOf("Maria");

console.log("Index of Maria:", mariaIndex);

console.log(people);
