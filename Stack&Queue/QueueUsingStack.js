class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Enqueue operation using stacks
  enqueue(element) {
    // Simply push the element to stack1
    this.stack1.push(element);
  }

  // Dequeue operation using stacks
  dequeue() {
    // If stack2 is empty, transfer elements from stack1 to stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // Pop from stack2 if it's not empty, otherwise return null
    return this.stack2.pop() || null;
  }

  // Peek operation
  peek() {
    // If stack2 is empty, return the bottom element of stack1
    if (this.stack2.length === 0) {
      return this.stack1.length > 0 ? this.stack1[0] : null;
    }

    // Return the top element of stack2
    return this.stack2[this.stack2.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.stack1.length + this.stack2.length;
  }
}

// Example usage:
const queue = new QueueUsingStack();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.peek()); // Output: 1

console.log("Dequeued element:", queue.dequeue()); // Output: 1
console.log("Dequeued element:", queue.dequeue()); // Output: 2

console.log("Is queue empty?", queue.isEmpty()); // Output: false
console.log("Queue size:", queue.size()); // Output: 1
