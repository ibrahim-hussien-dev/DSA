// Queue implemented using a Linked List
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(d) {
    let n = new Node(d);
    if (this.front == null) {
      this.front = this.back = n;
    } else {
      this.back.next = n;
      this.back = n;
    }
    this.size++;
  }

  dequeue() {
    if (this.front == null) return null;
    let d = this.front.data;
    this.front = this.front.next;
    if (this.front == null) this.back = null;
    this.size--;
    return d;
  }

  peek() {
    if (this.front == null) return null;
    return this.front.data;
  }

  isEmpty() {
    return this.front == null;
  }
}

// Testing
let q = new Queue();
q.enqueue(7);
q.enqueue(14);
q.enqueue(21);
q.enqueue(28);

console.log("Peek (front):", q.peek()); // 7
console.log("Dequeue:", q.dequeue()); // 7
console.log("Dequeue:", q.dequeue()); // 14
console.log("Dequeue:", q.dequeue()); // 21
console.log("Dequeue:", q.dequeue()); // 28
console.log("Dequeue (empty):", q.dequeue()); // null
console.log("isEmpty:", q.isEmpty()); // true
