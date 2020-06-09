class Insertion {
  static sort(a) {
    let n = a.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j > 0; j--) {
        if (a[j] < a[j - 1]) [a[j], a[j - 1]] = [a[j - 1], a[j]];
        else break;
      }
    }
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Insertion.sort(a);
console.log(a);
