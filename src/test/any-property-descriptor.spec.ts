import { AnyPropertyDescriptor } from "../lib";

interface Person {
  name: string;
  age: number;
}

const descriptor: AnyPropertyDescriptor<string, Person> = {
  // Accessor behavior (getter and setter)
  get: function() {
    return this.name;
  },
  set: function(value: string) {
    this.name = value;
  },

  // Data behavior (value and writable)
  value: "John",
  writable: true,
  configurable: true,
  enumerable: true,
};

// Apply the descriptor to an object
const obj: Person = {
  name: "Jane",
  age: 30,
};


Object.defineProperties(obj, {
  name: descriptor,
});

console.log(obj.name); // "John" (getter applied)
obj.name = "Doe"; // setter applied
console.log(obj.name); // "Doe"
