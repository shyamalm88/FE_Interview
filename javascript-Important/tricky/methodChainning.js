class Calculator {
  constructor() {
    this.value = 0;
    this.addition = (val) => {
      this.value += val;
      return this;
    };

    this.subtraction = (val) => {
      this.value -= val;
      return this;
    };

    this.multiplication = (val) => {
      this.value *= val;
      return this;
    };

    this.division = (val) => {
      this.value /= val;
      return this;
    };

    this.result = () => this.value;
  }
}

const calc = new Calculator();
console.log(
  calc.addition(10).division(2).multiplication(3).subtraction(2).result()
);
