const PubSub = function () {
  this.events = {};
};

PubSub.prototype.subscribe = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }

  this.events[event].push(callback);
};

PubSub.prototype.unsubscribe = function (event, callback) {
  this.events[event].filter((item) => item != callback);
};

PubSub.prototype.publish = function (event, data) {
  this.events[event].forEach((item) => item(data));
};

function handleEvent1(data) {
  console.log("Subscriber 1 received:", data);
}

// Subscriber 2
function handleEvent2(data) {
  console.log("Subscriber 2 received:", data);
}

const pubSub = new PubSub();
// Subscribe to events
pubSub.subscribe("event1", handleEvent1);
pubSub.subscribe("event2", handleEvent2);

// Publish events
pubSub.publish("event1", "Data for event1");
pubSub.publish("event2", "Data for event2");

// Unsubscribe from events
pubSub.unsubscribe("event1", handleEvent1);

// After unsubscribing, this won't trigger handleEvent1
pubSub.publish("event1", "Data for event1 after unsubscribe");
