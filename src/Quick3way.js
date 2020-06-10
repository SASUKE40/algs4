class Quick3way {
  static sort(a) {
    this._sort(a, 0, a.length - 1);
  }
  static _sort(a, lo, hi) {
    if (hi <= lo) return;
    let lt = lo,
      gt = hi;
    let v = a[lo];
    let i = lo + 1;
    while (i <= gt) {
      if (a[i] < v) [a[lt++], a[i++]] = [a[i], a[lt]];
      else if (a[i] > v) [a[gt--], a[i]] = [a[i], a[gt]];
      else i++;
    }
    this._sort(a, lo, lt - 1);
    this._sort(a, gt + 1, hi);
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Quick3way.sort(a);
console.log(a);
