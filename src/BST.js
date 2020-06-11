class BST {
  root = null;
  get(key) {
    let x = this.root;
    while (x !== null) {
      let cmp = key.compareTo(x.key);
      if (cmp < 0) x = x.left;
      else if (cmp > 0) x = x.right;
      else return x.val;
    }
    return null;
  }
  put(key, val) {
    this.root = this._put(this.root, key, val);
  }
  _put(x, key, val) {
    if (x === null) return new Node(key, val, 1);
    let cmp = key.compareTo(x.key);
    console.log(key, x.key, cmp);

    if (cmp < 0) x.left = this._put(x.left, key, val);
    else if (cmp > 0) x.right = this._put(x.right, key, val);
    else x.val = val;
    x.count = 1 + this._size(x.left) + this._size(x.right);
    return x;
  }
  floor(key) {
    let x = this._floor(this.root, key);
    if (x === null) return null;
    return x.key;
  }
  _floor(x, key) {
    if (x === null) return null;
    let cmp = key.compareTo(x.key);
    if (cmp === 0) return x;
    if (cmp < 0) return this._floor(x.left, key);
    let t = this._floor(x.right, key);
    if (t !== null) return t;
    else return x;
  }
  size() {
    return this._size(this.root);
  }
  _size(x) {
    if (x === null) return 0;
    return x.count;
  }
  rank(key) {
    return this._rank(key, this.root);
  }
  _rank(key, x) {
    if (x === null) return 0;
    let cmp = key.compareTo(x.key);
    if (cmp < 0) return this._rank(key, x.left);
    else if (cmp > 0) return this._size(x.left) + 1 + this._rank(key, x.right);
    else return this._size(x.left);
  }
  keys() {
    let q = [];
    this._inorder(this.root, q);
    return q;
  }
  _inorder(x, q) {
    if (x === null) return;
    this._inorder(x.left, q);
    q.push(x.key);
    this._inorder(x.right, q);
  }
  deleteMin() {
    this.root = this._deleteMin(this.root);
  }
  _deleteMin(x) {
    if (x.left === null) return x.right;
    x.left = this._deleteMin(x.left);
    x.count = 1 + this._size(x.left) + this._size(x.right);
    return x;
  }
  delete(key) {
    this.root = this._delete(this.root, key);
  }
  _delete(x, key) {
    if (x === null) return null;
    let cmp = key.compareTo(x.key);
    if (cmp < 0) x.left = this._delete(x.left, key);
    else if (cmp > 0) x.right = this._detete(x.right, key);
    else {
      if (x.right === null) return x.left;
      if (x.left === null) return x.right;
      let t = x;
      x = this._min(t.right);
      x.right = this._deleteMin(t.right);
      x.left = t.left;
    }
    x.count = this._size(x.left) + this._size(x.right) + 1;
    return x;
  }
  min() {
    return this._min(this.root).key;
  }
  _min(x) {
    if (x.left === null) return x;
    return this._min(x.left);
  }
}
class Node {
  left = null;
  right = null;
  key = null;
  val = null;
  count = 0;
  constructor(key, val, count) {
    this.key = key;
    this.val = val;
    this.count = count;
  }
}
String.prototype.compareTo = function (that) {
  return this < that ? -1 : this > that ? 1 : 0;
};

let bst = new BST();
bst.put('A', 8);
bst.put('C', 4);
bst.put('E', 12);
bst.put('H', 5);
bst.put('L', 11);
bst.put('M', 9);
bst.put('P', 10);
bst.put('R', 3);
bst.put('S', 0);
bst.put('X', 7);
// console.log(JSON.stringify(bst, null, 2));
