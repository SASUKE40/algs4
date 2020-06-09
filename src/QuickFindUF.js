class QuickFindUF {
  constructor(n) {
    this.count = n;
    this.id = new Array(n);
    for (let i = 0; i < n; i++) this.id[i] = i;
  }
  union(p, q) {
    let pID = this.id[p];
    let qID = this.id[q];
    if (pID === qID) return;
    for (let i = 0; i < this.id.length; i++) {
      if (id[i] === pID) this.id[i] = qID;
    }
    this.count--;
  }
  connected(p, q) {
    return this.id[p] === this.id[q];
  }
}
