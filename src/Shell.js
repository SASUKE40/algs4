class Shell {
  static sort(a) {
    let n = a.length;
    let h = 1;
    while (h < (n / 3) >> 0) h = 3 * h + 1;
    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
          [a[j], a[j - h]] = [a[j - h], a[j]];
        }
      }
      h = (h / 3) >> 0;
    }
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Shell.sort(a);
console.log(a);
