class WeightedQuickUnionUF {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    this.size = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }
  find(p) {
    while (p !== this.parent[p]) p = this.parent[p];
    return p;
  }
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] < this.size[rootQ]) {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
    this.count--;
  }
}

let weightedQuickUnionUF = new WeightedQuickUnionUF(10);

weightedQuickUnionUF.union(4, 3);
weightedQuickUnionUF.union(3, 8);
weightedQuickUnionUF.union(6, 5);
weightedQuickUnionUF.union(9, 4);
weightedQuickUnionUF.union(2, 1);
weightedQuickUnionUF.union(8, 9);
weightedQuickUnionUF.union(5, 0);
weightedQuickUnionUF.union(7, 2);
weightedQuickUnionUF.union(6, 1);
weightedQuickUnionUF.union(1, 0);
weightedQuickUnionUF.union(6, 7);
console.log(weightedQuickUnionUF.connected(7, 1));
