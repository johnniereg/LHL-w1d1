var myPass = process.argv.slice(2)[0];

function obfuscate(password) {
  var newPass = password.replace(/a/gi, '4');
  newPass = newPass.replace(/e/gi, '3');
  newPass = newPass.replace(/o/gi, '0');
  newPass = newPass.replace(/l/gi, '1');
  return newPass;
}

console.log(obfuscate(myPass));