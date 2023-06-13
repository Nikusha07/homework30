const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop()
console.log(fruit)
fruits.push("Kiwi");
let length = fruits.push("Kiwi");
console.log(length)
fruits.unshift("Lemon");

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

const myobject = [
    {
        firstName : "nika",
        lastName : "tefnadze",
        age : 18,
        proof : "programmer",
        point : [5,10,15],
    }
]
const updatedArray = myobject.map((obj) => {
    return {
      ...obj,
      name1: obj.name = "noka kifiani", 
      name2: obj.name = "giorgi abuladze"
    };
  });
  console.log(updatedArray)
  console.log(myobject[0].point)
    let num = myobject[0].point 

  function myFunction(num) {
    return num * 2;
  }
  newArray = num.map(myFunction)
  console.log(newArray)


const initialValue = 0;
const sumWithInitial = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);