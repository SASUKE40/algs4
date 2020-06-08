class QuickUnionUF {
  constructor(n) {
    this.id = new Array(n)
    for (let i = 0; i < n; i++) {
      this.id[i] = i
    }
  }
  root(i) {
    while (i !== this.id[i]) i = this.id[i]
    return i
  }
  union(p, q) {
    let i = this.root(p)
    let j = this.root(q)
    this.id[i] = j
  }
  connected(p, q) {
    return this.root(p) === this.root(q)
  }
}
