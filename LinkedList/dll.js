// Node class for Double Linked List
// Each node contains value, next pointer, and previous pointer
class Node {
  constructor(value) {
    this.val = value;      // Store the node value
    this.next = null;      // Pointer to the next node
    this.prev = null;      // Pointer to the previous node
  }
}

// Double Linked List class
class DLL {
  constructor() {
    this.head = null;      // First node in the list
    this.tail = null;      // Last node in the list
    this.length = 0;       // Number of nodes in the list
  }

  // Add a new node at the end of the list
  push(x) {
    var temp = new Node(x);

    // If the list is empty
    if (this.head == null) {
      this.head = this.tail = temp;
    }

    // Otherwise, connect the new node after the tail
    else {
      this.tail.next = temp;   // Old tail points to new node
      temp.prev = this.tail;   // New node points back to old tail
      this.tail = temp;        // Update tail
    }

    this.length++;
  }

  // Remove the last node from the list
  pop() {
    // If the list is empty
    if (this.head == null) {
      return null;
    }

    // If the list has only one node
    if (this.head == this.tail) {
      var value = this.head.val;
      this.head = this.tail = null;
      this.length--;
      return value;
    }

    // Store the current tail
    var temp = this.tail;

    // Move tail back to the previous node
    this.tail = temp.prev;

    // Remove the link to the old tail
    this.tail.next = null;
    temp.prev = null;

    this.length--;

    return temp.val;
  }

  // Print all values in the list
  print() {
    var temp = this.head;

    // Traverse from head to tail
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  // Search for a node by value
  search(val) {
    var temp = this.head;

    // Traverse the list until the value is found
    while (temp) {
      if (temp.val == val) {
        return temp;
      }

      temp = temp.next;
    }

    return null;
  }

  // Delete a node by value
  delete(val) {
    var temp = this.search(val);

    // If value is not found
    if (temp == null) {
      return;
    }

    // If the list has only one node
    if (this.head == this.tail) {
      this.head = this.tail = null;
    }

    // If the node to delete is the head
    else if (this.head == temp) {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    // If the node to delete is the tail
    else if (this.tail == temp) {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    // If the node is in the middle
    else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;

      temp.next = null;
      temp.prev = null;
    }

    this.length--;
  }

  // Remove the first node from the list
  shift() {
    // If the list is empty
    if (this.head == null) {
      return null;
    }

    var temp = this.head;

    // If the list has only one node
    if (this.head == this.tail) {
      this.head = this.tail = null;
    }

    // Otherwise, move head to the next node
    else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;

    return temp.val;
  }

  // Add a new node at the beginning of the list
  unshift(x) {
    var temp = new Node(x);

    // If the list is empty
    if (this.head == null) {
      this.head = this.tail = temp;
    }

    // Otherwise, connect the new node before the old head
    else {
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }

    this.length++;
  }

  // Get a node by index
  get(index) {
    // Check invalid index
    if (index < 0 || index >= this.length) {
      return null;
    }

    var temp;
    var counter;

    // If index is in the first half, start from head
    if (index <= this.length / 2) {
      temp = this.head;
      counter = 0;

      while (counter < index) {
        temp = temp.next;
        counter++;
      }
    }

    // If index is in the second half, start from tail
    else {
      temp = this.tail;
      counter = this.length - 1;

      while (counter > index) {
        temp = temp.prev;
        counter--;
      }
    }

    return temp;
  }

  // Update node value by index
  set(index, value) {
    var temp = this.get(index);

    // If index is invalid
    if (temp == null) {
      return false;
    }

    temp.val = value;
    return true;
  }

  // Insert a new node at a specific index
  insert(index, value) {
    // Check invalid index
    if (index < 0 || index > this.length) {
      return false;
    }

    // Insert at the beginning
    if (index == 0) {
      this.unshift(value);
      return true;
    }

    // Insert at the end
    if (index == this.length) {
      this.push(value);
      return true;
    }

    // Insert in the middle
    var newNode = new Node(value);
    var before = this.get(index - 1);
    var after = before.next;

    // Connect before node with new node
    before.next = newNode;
    newNode.prev = before;

    // Connect new node with after node
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }
}



var l1 = new DLL();

l1.push(10);
l1.push(20);
l1.push(30);

console.log("Print after push:");
l1.print();
// 10
// 20
// 30

console.log("Search 20:");
console.log(l1.search(20));
// Node {val: 20, next: Node, prev: Node}

console.log("Pop:");
console.log(l1.pop());
// 30

console.log("Print after pop:");
l1.print();
// 10
// 20

console.log("Unshift 5:");
l1.unshift(5);
l1.print();
// 5
// 10
// 20

console.log("Shift:");
console.log(l1.shift());
// 5

console.log("Print after shift:");
l1.print();
// 10
// 20

console.log("Insert 15 at index 1:");
l1.insert(1, 15);
l1.print();
// 10
// 15
// 20

console.log("Get index 1:");
console.log(l1.get(1));
// Node {val: 15, next: Node, prev: Node}

console.log("Set index 1 to 100:");
l1.set(1, 100);
l1.print();
// 10
// 100
// 20

console.log("Delete 100:");
l1.delete(100);
l1.print();
// 10
// 20