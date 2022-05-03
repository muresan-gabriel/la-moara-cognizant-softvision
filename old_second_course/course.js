// const arr = [1, 2, 3, 4, 5];
// const arr2 = new Array(5);
// arr2.push(6);
// arr2.push(...[7, 8, 9, ...[10]]);
// console.log(arr2);

// arr2.pop();
// console.log(arr2);

// arr2.shift();
// console.log(arr2);

// const [a, b, c, ...rest] = arr;
// console.log(a, b, c, rest);

// // Sets

// const mySet = new Set(arr);
// console.log(mySet);
// mySet.add(6);
// console.log(mySet);
// console.log(mySet.has(4));
// mySet.delete(4);
// console.log(mySet.has(4));
// mySet.clear();
// console.log(mySet);

// Objects

// const obj = {
//   property1: "value1",
//   fn: () => console.log("da"),
// };

// console.log(obj);
// obj.fn();

// const obj2 = Object.create(obj);
// obj2.newProperty = "value2";
// console.log(obj2.property1);

// const { property1 } = obj;
// console.log(property1);

// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr instanceof Array);
// console.log(typeof myArr);

// Prototypes

// JS has prototypal inheritance

// Child object has access to everything from the parent object

// this, bind

// function incrementThis() {
//   console.log(++this.counter);
// }

// const obj = {
//     counter: 0;
// }

// const incrementObj = incrementThis.bind(obj);

// incrementThis.call(obj);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    return { name: this.name, age: this.age };
  }
}

class PersonActions extends PersonClass {
  constructor(name, age) {
    super(name, age);
  }

  sleep() {
    console.log("Zzzzzzz...");
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const david = new PersonActions("David", 22);
