function caesarCipher(offset, input) {
  // your code here

  let indexAscii = offset % 26,
    outputStr = "";

  for (let i in input) {
    let karakter = input.charCodeAt(i) + indexAscii;
    if (karakter <= 122) {
      outputStr += String.fromCharCode(karakter);
    } else {
      karakter = (karakter % 122) + 96;
      outputStr += String.fromCharCode(karakter);
    }
  }
  return outputStr;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
// mnopqrstuvwxyzabcdefghijkl
