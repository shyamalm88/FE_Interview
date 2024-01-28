const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
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

console.log(object1 === object2);
