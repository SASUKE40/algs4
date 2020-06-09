class QuickUnionUF {
  constructor(n) {
    this.id = new Array(n);
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }
  root(i) {
    while (i !== this.id[i]) i = this.id[i];
    return i;
  }
  union(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    this.id[i] = j;
  }
  connected(p, q) {
    return this.root(p) === this.root(q);
  }
}
let quickUnionUF = new QuickUnionUF(10);

quickUnionUF.union(4, 3);
quickUnionUF.union(3, 8);
quickUnionUF.union(6, 5);
quickUnionUF.union(9, 4);
quickUnionUF.union(2, 1);
quickUnionUF.union(8, 9);
quickUnionUF.union(5, 0);
quickUnionUF.union(7, 2);
quickUnionUF.union(6, 1);
quickUnionUF.union(1, 0);
quickUnionUF.union(6, 7);
console.log(quickUnionUF.connected(7, 1));
