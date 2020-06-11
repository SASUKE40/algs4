class Heap {
  static sort(pq) {
    let n = pq.length;
    for (let k = (n / 2) >> 0; k >= 1; k--) {
      this.sink(pq, k, n);
    }
    let k = n;
    while (k > 1) {
      this.exch(pq, 1, k--);
      this.sink(pq, 1, k);
    }
  }
  static sink(pq, k, n) {
    while (2 * k <= n) {
      let j = 2 * k;
      if (j < n && this.less(pq, j, j + 1)) j++;
      if (!this.less(pq, k, j)) break;
      this.exch(pq, k, j);
      k = j;
    }
  }
  static less(pq, i, j) {
    return pq[i - 1] < pq[j - 1];
  }
  static exch(pq, i, j) {
    let swap = pq[i - 1];
    pq[i - 1] = pq[j - 1];
    pq[j - 1] = swap;
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Heap.sort(a);
console.log(a);
