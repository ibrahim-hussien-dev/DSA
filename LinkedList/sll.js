// Node class for Single Linked List
// Each node contains a value and a pointer to the next node
class SNode {
  constructor(value) {
    this.val = value;      // Store the node value
    this.next = null;      // Pointer to the next node
  }
}

// Single Linked List class
class SLL {
  constructor() {
    this.head = null;      // First node in the list
    this.tail = null;      // Last node in the list
    this.length = 0;       // Number of nodes in the list
  }

  // Add a new node at the end of the list
  push(x) {
    var temp = new SNode(x);

    // If the list is empty, head and tail will point to the new node
    if (this.head == null) {
      this.head = this.tail = temp;
    }

    // Otherwise, link the current tail to the new node
    // Then update the tail
    else {
      this.tail.next = temp;
      this.tail = temp;
    }

    this.length++;
  }

  // Remove the last node from the list
  pop() {
    // If the list is empty, there is nothing to remove
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

    // Move until the node before the tail
    var temp = this.head;

    while (temp.next != this.tail) {
      temp = temp.next;
    }

    // Save the tail value before removing it
    var value = this.tail.val;

    // Update tail to be the previous node
    this.tail = temp;
    this.tail.next = null;

    this.length--;

    return value;
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

    // Traverse the list and compare each node value
    while (temp) {
      if (temp.val == val) {
        return temp;       // Return the node if found
      }

      temp = temp.next;
    }

    return null;           // Return null if value is not found
  }

  // Delete a node by value
  delete(val) {
    var temp = this.head;

    // If the list is empty, do nothing
    if (temp == null) {
      return;
    }

    // If the list has one node and it is the required value
    if (this.head == this.tail && this.head.val == val) {
      this.head = this.tail = null;
      this.length--;
      return;
    }

    // If the node to delete is the head
    if (this.head.val == val) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    // Search for the node while keeping track of the previous node
    var prev = this.head;
    temp = this.head.next;

    while (temp) {
      if (temp.val == val) {
        // Skip the deleted node
        prev.next = temp.next;

        // If the deleted node is the tail, update the tail
        if (temp == this.tail) {
          this.tail = prev;
        }

        this.length--;
        return;
      }

      prev = temp;
      temp = temp.next;
    }
  }

  // Remove the first node from the list
  shift() {
    // If the list is empty
    if (this.head == null) {
      return null;
    }

    var value = this.head.val;

    // If the list has only one node
    if (this.head == this.tail) {
      this.head = this.tail = null;
    }

    // Otherwise, move head to the next node
    else {
      this.head = this.head.next;
    }

    this.length--;
    return value;
  }

  // Add a new node at the beginning of the list
  unshift(x) {
    var temp = new SNode(x);

    // If the list is empty
    if (this.head == null) {
      this.head = this.tail = temp;
    }

    // Otherwise, link the new node to the old head
    // Then update the head
    else {
      temp.next = this.head;
      this.head = temp;
    }

    this.length++;
  }

  // Get a node by its index
  get(index) {
    // Check if index is out of range
    if (index < 0 || index >= this.length) {
      return null;
    }

    var temp = this.head;
    var counter = 0;

    // Move from head until reaching the required index
    while (counter < index) {
      temp = temp.next;
      counter++;
    }

    return temp;
  }

  // Update the value of a node by index
  set(index, value) {
    var temp = this.get(index);

    // If index is invalid
    if (temp == null) {
      return false;
    }

    // Update node value
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
    var newNode = new SNode(value);
    var prev = this.get(index - 1);

    // Link the new node with the next node
    newNode.next = prev.next;

    // Link the previous node with the new node
    prev.next = newNode;

    this.length++;
    return true;
  }
}

var s1 = new SLL();

s1.push(10);
s1.push(20);
s1.push(30);

console.log("Print after push:");
s1.print();
// 10
// 20
// 30

console.log("Search 20:");
console.log(s1.search(20));
// SNode {val: 20, next: SNode}

console.log("Pop:");
console.log(s1.pop());
// 30

console.log("Print after pop:");
s1.print();
// 10
// 20

console.log("Unshift 5:");
s1.unshift(5);
s1.print();
// 5
// 10
// 20

console.log("Shift:");
console.log(s1.shift());
// 5

console.log("Print after shift:");
s1.print();
// 10
// 20

console.log("Insert 15 at index 1:");
s1.insert(1, 15);
s1.print();
// 10
// 15
// 20

console.log("Get index 1:");
console.log(s1.get(1));
// SNode {val: 15, next: SNode}

console.log("Set index 1 to 100:");
s1.set(1, 100);
s1.print();
// 10
// 100
// 20

console.log("Delete 100:");
s1.delete(100);
s1.print();
// 10
// 20