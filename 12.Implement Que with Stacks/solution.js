var MyQueue = function () {
  this.firstTop = [];
  this.lastTop = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.lastTop.length === 0) {
    while (this.firstTop.length > 0) {
      this.lastTop.push(this.firstTop.pop());
    }
  }
  this.lastTop.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.firstTop.length === 0) {
    while (this.lastTop.length > 0) {
      this.firstTop.push(this.lastTop.pop());
    }
  }
  return this.firstTop.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.firstTop.length === 0) {
    while (this.lastTop.length > 0) {
      this.firstTop.push(this.lastTop.pop());
    }
  }
  return this.firstTop[this.firstTop.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  const isFirstTopEmpty = this.firstTop.length === 0;
  const isLastTopEmpty = this.lastTop.length === 0;
  return isFirstTopEmpty && isLastTopEmpty;
};
