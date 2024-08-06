const Singleton = (function () {
  let instance;

  function createInstance() {
    this.name = "Singleton";
    this.random = Math.random();
    return { name: this.name, random: this.random };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();

console.log(object1);
console.log(object2);
console.log(object1 === object2);
