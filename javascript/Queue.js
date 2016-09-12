function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue (element) {
  this.dataStore.push(element);
}

function dequeue () {
  this.dataStore.shift();
}

function front () {
  return this.dataStore[0];
}

function back () {
  return this.dataStore[this.dataStore.lenght - 1];
}

function empty () {
  return this.dataStore.lenght === 0;
}

function toString () {
  return this.dataStore.map(function (element) {
    return element + '\n';
  }).join(' ');
}
