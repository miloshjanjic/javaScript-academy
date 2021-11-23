// Person.js
let person = [
  {
      name: "Johnny",
      surname: "Storm",
      age: 24,
      height: 192
  },
  {
      name: "Reed",
      surname: "Richards",
      age: 34,
      height: 201
  },
  {
      name: "Ben",
      surname: "Grim",
      age: 28,
      height: 181
  },
  {
      name: "Susan",
      surname: "Storm",
      age: 30,
      height: 178
  },
]
function getInfo(x) {
  return person[x];
}
function getName(x) {
  return person[x].name;
}
function getAge(x) {
  return person[x].age;
}
module.exports = {
  getInfo,
  getName,
  getAge
}