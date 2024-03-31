const Developer = function (name) {
  this.name = name;
  this.type = "Developer";
};

const Tester = function (name) {
  this.name = name;
  this.type = "Tester";
};

const EmployeeFactory = function () {
  this.create = (name, type) => {
    switch (type) {
      case "tester":
        return new Tester(name);
      case "developer":
        return new Developer(name);
    }
  };
};

const sayHello = function () {
  console.log("Hello My Name Is " + this.name + " and I am a " + this.type);
};

const employee = new EmployeeFactory();

const emp1 = employee.create("John", "developer");

sayHello.call(emp1);
