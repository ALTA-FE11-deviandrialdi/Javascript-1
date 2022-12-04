function ubahHuruf(sentence) {
  let abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = sentence.split(" ");
  let resultArr = [];

  word.map((item) => {
    let newWord = "";
    for (let i in item) {
      let newIndex = abjad.indexOf(item[i]) + 10;
      if (newIndex < abjad.length) {
        newWord += abjad[newIndex];
      } else {
        newIndex = newIndex % 26;
        newWord += abjad[newIndex];
      }
    }
    resultArr.push(newWord);
  });
  return resultArr.join(" ");
}

// TEST CASES
console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB
