// Stack implemented using a Linked List

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(d) {
    let n = new Node(d);
    if (this.top == null) {
      this.top = n;
    } else {
      n.next = this.top;
      this.top = n;
    }
    this.size++;
  }

  pop() {
    if (this.top == null) return null;
    let d = this.top.data;
    this.top = this.top.next;
    this.size--;
    return d;
  }

  peek() {
    if (this.top == null) return null;
    return this.top.data;
  }

  isEmpty() {
    return this.top == null;
  }
}

// Testing
let s = new Stack();
s.push(5);
s.push(15);
s.push(25);
s.push(35);

console.log("Peek (top):", s.peek()); // 35
console.log("Pop:", s.pop()); // 35
console.log("Pop:", s.pop()); // 25
console.log("Pop:", s.pop()); // 15
console.log("Pop:", s.pop()); // 5
console.log("Pop (empty):", s.pop()); // null
console.log("isEmpty:", s.isEmpty()); // true
