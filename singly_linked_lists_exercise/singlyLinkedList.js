function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.push = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.pop = function () {
  if (!this.head) return undefined;
  let last = this.tail,
    list = this.head;
  while (list.next) {
    if (list.next.next) list = list.next.next;
    else list = list.next;
  }
  this.tail = last;
  this.length--;
  return last.val;
};

SinglyLinkedList.prototype.unshift = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
  } else {
    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  const currentHead = this.head;
  this.head = this.head.next;
  this.length--;
  return currentHead.val;
};

SinglyLinkedList.prototype.set = function (index, value) {
  let counter = 0,
    currentIteration = this.head;
  while (counter <= index) {
    if (!currentIteration?.val) return;
    if (counter === index) currentIteration.val = value;
    currentIteration = currentIteration.next;
    counter++;
  }
};

SinglyLinkedList.prototype.get = function (index) {
  let counter = 0,
    currentIteration = this.head;
  while (counter <= index) {
    if (!currentIteration?.val) return null;
    if (counter === index) return currentIteration.val;
    currentIteration = currentIteration.next;
    counter++;
  }
};

SinglyLinkedList.prototype.insert = function (index, value) {
  const node = new Node(value);
  let counter = 0,
    currentIteration = this.head;
  while (counter <= index) {
    if (!currentIteration?.val) return null;
    if (counter === index - 1) {
      node.next = currentIteration.next;
      currentIteration.next = node;
    }
    currentIteration = currentIteration.next;
    counter++;
  }
  this.length++;
};

SinglyLinkedList.prototype.remove = function (index) {
  let counter = 0,
    currentIteration = this.head;
  while (currentIteration?.val) {
    if (counter + 1 === index) {
      currentIteration.next = currentIteration.next.next;
    }
    currentIteration = currentIteration.next;
    counter++;
  }
  this.length--;
};

DoublyLinkedList.prototype.reverse = function () {
  let currentIteration = this.head.next,
    i = 0;
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
    i++;
  }
  return this;
};
