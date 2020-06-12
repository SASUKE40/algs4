/**
 * color red
 */
const RED = true;
/**
 * color black
 */
const BLACK = false;
class RedBlackLiteBST {
  root = null;
  n = 0;
  /***************************************************************************
   *  Standard BST search.
   ***************************************************************************/

  get(key) {
    return this._get(this.root, key);
  }
  _get(x, key) {
    while (x !== null) {
      let cmp = key.compareTo(x.key);
      if (cmp < 0) x = x.left;
      else if (cmp > 0) x = x.right;
      else return x.val;
    }
    return null;
  }
  contains(key) {
    return this.get(key) !== null;
  }
  /***************************************************************************
   *  Red-black tree insertion.
   ***************************************************************************/
  /**
   * put a node
   * @param {any} key
   * @param {any} val
   */
  put(key, val) {
    this.root = this.insert(this.root, key, val);
    this.root.color = BLACK;
  }
  insert(h, key, val) {
    if (h === null) {
      this.n++;
      return new Node(key, val, RED);
    }
    let cmp = key.compareTo(h.key);
    if (cmp < 0) h.left = this.insert(h.left, key, val);
    else if (cmp > 0) h.right = this.insert(h.right, key, val);
    else h.val = val;

    if (this.isRed(h.right) && !this.isRed(h.left)) h = this.rotateLeft(h);
    if (this.isRed(h.left) && this.isRed(h.left.left)) h = this.rotateRight(h);
    if (this.isRed(h.left) && this.isRed(h.right)) this.flipColors(h);
    return h;
  }
  /***************************************************************************
   *  Red-black tree helper functions.
   ***************************************************************************/
  /**
   * is node x red
   * @param {Node} x
   */
  isRed(x) {
    if (x === null) return false;
    return x.color === RED;
  }
  /**
   * rotate left
   * @param {Node} h
   */
  rotateLeft(h) {
    if (h !== null && this.isRed(h.right)) {
      let x = h.right;
      h.right = x.left;
      x.left = h;
      x.color = h.color;
      h.color = RED;
      return x;
    }
  }
  /**
   * rotate right
   * @param {Node} h
   */
  rotateRight(h) {
    if (h !== null && this.isRed(h.left)) {
      let x = h.left;
      h.left = x.right;
      x.right = h;
      x.color = h.color;
      h.color = RED;
      return x;
    }
  }
  /**
   * flip colors
   * @param {Node} h
   */
  flipColors(h) {
    if (!this.isRed(h) && this.isRed(h.left) && this.isRed(h.right)) {
      h.color = RED;
      h.left.color = BLACK;
      h.right.color = BLACK;
    }
  }
  /***************************************************************************
   *  Iterate using an inorder traversal.
   *  Iterating through N elements takes O(N) time.
   ***************************************************************************/
  keys() {
    let queue = [];
    this._keys(this.root, queue);
    return queue;
  }
  _keys(x, queue) {
    if (x === null) return;
    this._keys(x.left, queue);
    queue.push(x.key);
    this._keys(x.right, queue);
  }
  /***************************************************************************
   *  Utility functions.
   ***************************************************************************/
  size() {
    return this.n;
  }
  min() {
    return this._min(this.root);
  }
  _min(x) {
    let key = null;
    while (x !== null) {
      key = x.key;
      x = x.left;
    }
    return key;
  }
  max() {
    return this._max(this.root);
  }
  _max(x) {
    let key = null;
    while (x !== null) {
      key = x.key;
      x = x.right;
    }
    return key;
  }
  isBST() {
    return this._isBST(this.root, null, null);
  }
  _isBST(x, min, max) {
    if (x === null) return true;
    if (min !== null && x.key.compareTo(min) <= 0) return false;
    if (max !== null && x.key.compareTo(max) >= 0) return false;
    return this._isBST(x.left, min, x.key) && this._isBST(x.right, x.key, max);
  }
}
class Node {
  key = null;
  val = null;
  left = null;
  right = null;
  color = RED;
  constructor(key, val, color) {
    this.key = key;
    this.val = val;
    this.color = color;
  }
}

String.prototype.compareTo = function (that) {
  return this < that ? -1 : this > that ? 1 : 0;
};

let test = 'S E A R C H E X A M P L E';
let keys = test.split(' ');
let st = new RedBlackLiteBST();
for (let i = 0; i < keys.length; i++) {
  st.put(keys[i], i);
}
console.log('size = ', st.size());
console.log('min = ', st.min());
console.log('max = ', st.max());

console.log('Testing keys()');
for (const s of st.keys()) {
  console.log(s + ' ' + st.get(s));
}
