const PubSub = (function () {
  const events = {};

  function subscribe(event, callback) {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(callback);
  }

  function publish(event, data) {
    if (events[event]) {
      events[event].forEach((callback) => {
        callback(data);
      });
    }
  }

  function unsubscribe(event, callback) {
    if (events[event]) {
      events[event] = events[event].filter(
        (subscriber) => subscriber !== callback
      );
    }
  }

  return {
    subscribe,
    publish,
    unsubscribe,
  };
})();

function handleEvent1(data) {
  console.log("Subscriber 1 received:", data);
}

// Subscriber 2
function handleEvent2(data) {
  console.log("Subscriber 2 received:", data);
}

// Subscribe to events
PubSub.subscribe("event1", handleEvent1);
PubSub.subscribe("event2", handleEvent2);

// Publish events
PubSub.publish("event1", "Data for event1");
PubSub.publish("event2", "Data for event2");

// Unsubscribe from events
PubSub.unsubscribe("event1", handleEvent1);

// After unsubscribing, this won't trigger handleEvent1
PubSub.publish("event1", "Data for event1 after unsubscribe");
