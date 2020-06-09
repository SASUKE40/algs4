class Merge {
  static sort(a) {
    let aux = new Array(a.length);
    this._sort(a, aux, 0, a.length - 1);
  }
  static _sort(a, aux, lo, hi) {
    if (hi <= lo) return;
    let mid = (lo + hi) >> 1;
    this._sort(a, aux, lo, mid);
    this._sort(a, aux, mid + 1, hi);
    this.merge(a, aux, lo, mid, hi);
  }
  static merge(a, aux, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }
    let i = lo,
      j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      if (i > mid) a[k] = aux[j++];
      else if (j > hi) a[k] = aux[i++];
      else if (aux[j] < aux[i]) a[k] = aux[j++];
      else a[k] = aux[i++];
    }
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Merge.sort(a);
console.log(a);
