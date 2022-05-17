function Node(node) {
  this.value = node;
  this.next = null;
}
function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Queue.prototype.enqueue = function (value) {
  const node = new Node(value);
  if (!this.last) {
    this.last = node;
    this.first = node;
  } else {
    const currentLast = this.last;
    this.last = node;
    currentLast.next = this.last;
  }
  return ++this.size;
};

Queue.prototype.dequeue = function () {
  let currentIteration = this.first,
    currentValue = currentIteration.value;
  this.first = this.first.next;
  this.size--;
  return currentValue;
};

Queue.prototype.peek = function () {
  return this.first.value;
};
