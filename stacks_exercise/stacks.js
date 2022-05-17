function Node(node) {
  this.value = node;
  this.next = null;
}
function Stack() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Stack.prototype.push = function (val) {
  const node = new Node(val);
  if (!this.first) {
    this.first = node;
    this.last = node;
  } else {
    const currentLast = this.first;
    this.first = node;
    currentLast.next = this.first;
  }
  return ++this.size;
};

Stack.prototype.pop = function () {
  let currentIteration = this.last,
    currentValue = currentIteration.value;
  while (currentIteration) {
    const nextIteration = currentIteration.next;
    if (!nextIteration?.next) {
      currentValue = currentIteration.value;
      currentIteration.next = null;
    }
    currentIteration = nextIteration;
  }
  this.size--;
  return currentValue;
};

Stack.prototype.peek = function () {
  return this.first.value;
};
