// Binary Search Tree (BST)

class Node {
  constructor(d) {
    this.data = d;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(d) {
    let n = new Node(d);
    if (this.root == null) {
      this.root = n;
      return;
    }
    let r = this.root;
    while (r) {
      if (d < r.data) {
        if (r.left == null) {
          r.left = n;
          return;
        }
        r = r.left;
      } else if (d > r.data) {
        if (r.right == null) {
          r.right = n;
          return;
        }
        r = r.right;
      } else {
        return;
      }
    }
  }

  printInOrder() {
    this.printInOrderR(this.root);
  }

  printInOrderR(r) {
    if (r == null) return;
    this.printInOrderR(r.left);
    console.log(r.data);
    this.printInOrderR(r.right);
  }
}

// Testing
let t = new BST();
t.insert(40);
t.insert(60);
t.insert(25);
t.insert(70);
t.insert(33);
t.insert(12);
t.insert(55);

console.log("In-Order Traversal (sorted):");
t.printInOrder();
// output: 12, 25, 33, 40, 55, 60, 70
