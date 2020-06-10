class QuickSelect {
  static sort(a) {
    this._sort(a, 0, a.length - 1);
  }
  static _sort(a, lo, hi) {
    if (hi <= lo) return;
    let j = this.partition(a, lo, hi);
    this._sort(a, lo, j - 1);
    this._sort(a, j + 1, hi);
  }
  static partition(a, lo, hi) {
    let i = lo;
    let j = hi + 1;
    let v = a[lo];
    while (true) {
      while (a[++i] < v) if (i === hi) break;
      while (a[--j] > v) if (j === lo) break;
      if (i >= j) break;
      [a[i], a[j]] = [a[j], a[i]];
    }
    [a[j], a[lo]] = [a[lo], a[j]];
    return j;
  }
  static select(a, k) {
    let lo = 0;
    let hi = a.length - 1;
    while (lo < hi) {
      let j = this.partition(a, lo, hi);
      if (j < k) lo = j + 1;
      else if (j > k) hi = j - 1;
      else return a[k];
    }
    return a[k];
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
let kth = QuickSelect.select(a, 3);
console.log(kth);
