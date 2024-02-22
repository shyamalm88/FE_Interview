class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  // Push operation using queues
  push(element) {
    // Move all elements from queue1 to queue2
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }

    // Enqueue the new element to queue1
    this.queue1.push(element);

    // Move all elements back from queue2 to queue1
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
  }

  // Pop operation using queues
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue1.shift();
  }

  // Peek operation
  peek() {
    return this.isEmpty() ? null : this.queue1[0];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.queue1.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.queue1.length;
  }
}

// Example usage:
const stack = new StackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element:", stack.peek()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 3
console.log("Popped element:", stack.pop()); // Output: 2

console.log("Is stack empty?", stack.isEmpty()); // Output: false
console.log("Stack size:", stack.size()); // Output: 1
