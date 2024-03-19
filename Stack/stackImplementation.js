// Basic Stack Implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty. Can't perform pop.";
    }

    return this.stack.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
}
const stack = new Stack();

stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.size());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
