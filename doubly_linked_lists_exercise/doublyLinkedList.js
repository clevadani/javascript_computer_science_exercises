function Node(value) {
  this.val = value;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.push = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    let i = 0;
    let currentIteration = this.head;
    while (currentIteration) {
      const nextIteration = currentIteration.next;
      if (!nextIteration) {
        // last
        node.prev = currentIteration;
        currentIteration.next = node;
        this.tail = node;
      }
      currentIteration = nextIteration;
      i++;
    }
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.pop = function () {
  if (!this.head) return;
  let currentIteration = this.head,
    value;

  while (currentIteration) {
    if (!currentIteration.next.next) {
      value = currentIteration.next;
      currentIteration.next = null;
      this.tail = currentIteration.next;
    }
    currentIteration = currentIteration.next;
  }
  this.length--;
  return value.val;
};

DoublyLinkedList.prototype.unshift = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    const currentHead = this.head;
    this.head = node;
    currentHead.prev = this.head;
    this.head.next = currentHead;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  const prevHead = this.head;
  const currentHead = prevHead.next;
  this.head = currentHead;
  this.length--;
  return prevHead.val;
};

DoublyLinkedList.prototype.set = function (index, value) {
  let currentIteration = this.head,
    counter = 0;
  while (currentIteration) {
    if (index === counter) {
      currentIteration.val = value;
    }
    currentIteration = currentIteration.next;
    counter++;
  }
};

DoublyLinkedList.prototype.get = function (index) {
  let currentIteration = this.head,
    counter = 0;
  while (currentIteration) {
    if (index === counter) return currentIteration.val;
    currentIteration = currentIteration.next;
    counter++;
  }
  return null;
};

DoublyLinkedList.prototype.insert = function (index, value) {
  const node = new Node(value);
  let currentIteration = this.head,
    counter = 0;
  while (currentIteration) {
    if (counter + 1 === index) {
      const tempNext = currentIteration.next;
      node.prev = currentIteration;
      node.next = tempNext;
      currentIteration.next = node;
    }
    currentIteration = currentIteration.next;
    counter++;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.remove = function (index) {
  let currentIteration = this.head,
    counter = 0;
  while (currentIteration) {
    if (counter + 1 === index) {
      currentIteration.next = currentIteration.next.next;
    }
    currentIteration = currentIteration.next;
    counter++;
  }
  this.length--;
  return this;
};

DoublyLinkedList.prototype.reverse = function () {
  let currentIteration = this.head.next;
  while (currentIteration) {
    let nextIteration = currentIteration.next,
      prevIteration = currentIteration.prev;
    currentIteration.prev = nextIteration;
    currentIteration.next = prevIteration;
    if (!prevIteration.prev) {
      this.tail.next = null;
      this.tail = currentIteration;
    } else if (!nextIteration) {
      this.head = currentIteration;
      this.head.prev = null;
    }
    currentIteration = nextIteration;
  }
  return this;
};
