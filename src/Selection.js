class Selection {
  static sort(a) {
    let n = a.length;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (a[j] < a[min]) min = j;
      }
      [a[i], a[min]] = [a[min], a[i]];
    }
  }
}

let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
Selection.sort(a);
console.log(a);
