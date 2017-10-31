var inputs = process.argv.slice(2);
inputs.forEach(reverse);

function reverse(item) {
  var letters = item.split("");
  var backwards = "";
  for (var i = (letters.length - 1); i >= 0; i--) {
    backwards += letters[i];
  }
  console.log(backwards);
}