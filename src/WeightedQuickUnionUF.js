class WeightedQuickUnionUF {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    this.size = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  find(p) {
    while (p !== this.parent[p]) p = p.parent[p]
    return p
  }
  connected(p, q) {
    return this.find(p) === this.find(q)
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    if (rootP === rootQ) return
    if (this.size[rootP] < this.size[rootQ]) {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    } else {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    }
    this.count--
  }
}
