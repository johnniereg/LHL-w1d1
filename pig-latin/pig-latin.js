var words = process.argv.slice(2);
var lastWord = words[words.length - 1];
var piggedSentence = "";

function pigLatinator(word) {
  var piggedWord = "";

  // add every letter except the first letter
  for (var i = 1; i < word.length; i++) {
    piggedWord += word[i];
  }

  // add first letter to end of pigged word
  piggedWord += word[0];

  // adds ay to end of word
  return piggedWord += word == lastWord ? "ay" : "ay "
}

words.forEach(function(word) {
  piggedSentence += pigLatinator(word);
});

console.log(piggedSentence);