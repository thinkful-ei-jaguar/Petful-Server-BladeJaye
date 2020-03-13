class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    if(this.first === null){
      const node = new _Node(data, null);
      this.first = node;
      this.last = node;
      return node;
    }
    let temp = this.last;
    const node = new _Node(data, null);
    temp.next = node;
    this.last = node;
    return node;
  }

  dequeue() {
    // Remove some data from the queue.
    if(this.first === null) {
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    if(temp === this.last) {
      this.last = null;
    }
    return temp.data;
  }

  show() {
    // Return the next item in the queue.
    return this.first
  }

  all() {
    // Return all items in the queue.
    let qArray = []
    let current = this.first
    while (current !== null) {
      qArray.push(current.data)
      current = current.next
    }
    return qArray
  }
}

module.exports = Queue
