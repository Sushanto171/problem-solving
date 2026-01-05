// Problem 1:

const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karima", age: 22, gender: "female" },
  { name: "Sabbir", age: 28, gender: "male" },
  { name: "Nusrat", age: 24, gender: "female" },
  { name: "Tanvir", age: 30, gender: "male" }
];

const getNonFemalePersonNames = (people) => {

  const nonFemalePerson = people.filter(p => p.gender !== "female")

  return nonFemalePerson.map(n => n.name)
}

console.log(getNonFemalePersonNames(people))