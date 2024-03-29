class Observer {
  constructor() {
    this.handlers = [];

    this.subscribe = function (fn) {
      this.handlers.push(fn);
    };

    this.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter((item) => item !== fn);
    };

    this.fire = function (o, thisObj) {
      const scope = thisObj || globalThis;
      this.handlers.forEach((item) => {
        item.call(scope, o);
      });
    };
  }
}

const handler = function (item) {
  console.log("fired: " + item);
};

const handler2 = function (item) {
  console.log("Moved: " + item);
};

const move = new Observer();

move.subscribe(handler);
move.fire("event #1");

move.unsubscribe(handler);
move.fire("event #2");

move.subscribe(handler);
move.subscribe(handler2);
move.fire("event #3");
