const person = {
  name: "prashant",
  age: 28,
  gender: "male",
};

const proxiedPerson = new Proxy(person, {
  get(obj, prop) {
    if (prop === "gender") {
      console.log("Gender is a write only property be exposed!");
    } else {
      return obj[prop];
    }
  },
  set(obj, prop, value) {
    if (prop === "age") {
      if (value < 18 || value > 50) {
        console.log("Age value should be between 18 and 50");
      } else {
        obj[prop] = value;
      }
    } else {
      obj[prop] = value;
    }
  },
});

console.log(proxiedPerson.age);
