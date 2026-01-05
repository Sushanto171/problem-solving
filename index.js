// Problem 1:

const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karima", age: 22, gender: "female" },
  { name: "Sabbir", age: 28, gender: "male" },
  { name: "Nusrat", age: 24, gender: "female" },
  { name: "Tanvir", age: 30, gender: "male" },
];

const getNonFemalePersonNames = (people) => {
  const nonFemalePerson = people.filter((p) => p.gender !== "female");

  return nonFemalePerson.map((n) => n.name);
};

// console.log(getNonFemalePersonNames(people))

// Problem 2 :

const books = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
  { title: "Refactoring", author: "Martin Fowler", year: 2018 },
  { title: "Design Patterns", author: "Erich Gamma", year: 1994 },
];

const getBooksTitle = (books) => {
  return books.map((b) => b.title);
};

// console.log(getBooksTitle(books))

// Problem 3:

const square = (num) => {
  return num * num;
};
const double = (num) => {
  return num * 2;
};
const add5 = (num) => {
  return num + 5;
};

const squareDoubleAddFive= (num) => {
  return add5(double(square(num)));
};

// console.log(squareDoubleAddFive(10))


// Problem 4:

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "BMW", model: "X5", year: 2019 }
];

const sortedCars =(cars)=>{
  return cars.sort((a,b)=> a.year - b.year)
}

// console.log(sortedCars(cars))