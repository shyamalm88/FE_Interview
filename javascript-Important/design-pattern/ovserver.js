function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter((item) => item != fn);
  },
  fire: function (o, thisObj) {
    let scope = thisObj || globalThis;
    this.observers.forEach((item) => item.call(scope, o));
  },
};

const handler = function (item) {
  console.log("fired: " + item);
};

const handler2 = function (item) {
  console.log("Moved: " + item);
};

const move = new Subject();

move.subscribe(handler);
move.fire("event #1");

move.unsubscribe(handler);
move.fire("event #2");

move.subscribe(handler2);
move.fire("event #3");
move.fire("event #4");
