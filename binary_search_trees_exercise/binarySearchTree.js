function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function (value) {
  const node = new Node(value);
  let currentIteration = this.root;
  if (!this.root) this.root = node;
  while (currentIteration) {
    if (currentIteration.value >= value) {
      if (currentIteration.left) {
        currentIteration = currentIteration.left;
      } else {
        currentIteration.left = node;
        currentIteration = null;
      }
    } else {
      if (currentIteration.right) {
        currentIteration = currentIteration.right;
      } else {
        currentIteration.right = node;
        currentIteration = null;
      }
    }
  }
  return this;
};

BinarySearchTree.prototype.insertRecursively = function (value) {
  const node = new Node(value);
  function insertRecursively(root) {
    if (!root) return node;
    if (root.value >= value) root.left = insertRecursively(root.left);
    else root.right = insertRecursively(root.right);
    return root;
  }
  this.root = insertRecursively(this.root);
  return this;
};

BinarySearchTree.prototype.findIteratively = function (value) {
  let currentIteration = this.root;
  while (currentIteration) {
    if (currentIteration.value === value) return currentIteration;
    if (currentIteration.value >= value)
      currentIteration = currentIteration.left;
    else currentIteration = currentIteration.right;
  }
};

BinarySearchTree.prototype.findRecursively = function (value) {
  let currentIteration = this.root;
  function findRecursively(node) {
    if (!node) return;
    if (node.value === value) return node;
    let current;
    if (node.value >= value) current = node.left;
    else current = node.right;
    return findRecursively(current);
  }
  return findRecursively(currentIteration);
};

BinarySearchTree.prototype.toArray = function () {
  function toArray(node) {
    if (!node) return [];
    if (node.value && !node.left && !node.right) return [node.value];
    return [...toArray(node.left), node.value, ...toArray(node.right)];
  }
  return toArray(this.root);
};

BinarySearchTree.prototype.DFSPreOrder = function () {
  function DFSPreOrder(node) {
    if (!node) return [];
    if (node.value && !node.left && !node.right) return [node.value];
    return [node.value, ...DFSPreOrder(node.left), ...DFSPreOrder(node.right)];
  }
  return DFSPreOrder(this.root);
};

BinarySearchTree.prototype.DFSInOrder = function () {
  function DFSInOrder(node) {
    if (!node) return [];
    if (node.value && !node.left && !node.right) return [node.value];
    return [...DFSInOrder(node.left), node.value, ...DFSInOrder(node.right)];
  }
  return DFSInOrder(this.root);
};

BinarySearchTree.prototype.DFSPostOrder = function () {
  function DFSPostOrder(node) {
    if (!node) return [];
    if (node.value && !node.left && !node.right) return [node.value];
    return [
      ...DFSPostOrder(node.left),
      ...DFSPostOrder(node.right),
      node.value,
    ];
  }
  return DFSPostOrder(this.root);
};

BinarySearchTree.prototype.breadthFirstSearch = function () {
  const queue = [this.root],
    result = [];
  while (queue.length) {
    console.log(queue.length);
    const current = queue[0];
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    result.push(current.value);
    queue.shift();
  }
  return result;
};

BinarySearchTree.prototype.remove = function (value) {
  let currentIteration = this.root;
  while (currentIteration) {
    let left = currentIteration.left,
      right = currentIteration.right,
      next = currentIteration.value > value ? left : right;
    if (left && left.value === value) {
      if (!left.left && !left.right) currentIteration.left = null;
      else if (left.right) {
        let temp = left.left;
        currentIteration.left = left.right;
        currentIteration.left.left = temp;
      } else currentIteration.left = left.left;
      next = null;
    } else if (right && right.value === value) {
      if (!right.left && !right.right) currentIteration.right = null;
      else if (right.right) {
        let temp = right.left;
        currentIteration.right = right.right;
        currentIteration.right.left = temp;
      } else currentIteration.left = right.left;
      next = null;
    }
    currentIteration = next;
  }
};
