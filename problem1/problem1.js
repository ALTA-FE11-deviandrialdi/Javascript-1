function playWithAsterik(n) {
  // your code here
  let result = "";

  for (let i = n; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }
    for (let k = n - 1; k >= i; k--) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

console.log(playWithAsterik(5));
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
