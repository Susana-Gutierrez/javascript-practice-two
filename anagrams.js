
function anagrams(word1, word2) {

  var a = word1.toLowerCase();
  var b = word2.toLowerCase();

  if (a.length === b.length ) {

    var w1 = a.split("").sort().join("");
    var w2 = b.split("").sort().join("");

    if ( w1 === w2 ) {
      return true;
    }


  }

  return false;

}
