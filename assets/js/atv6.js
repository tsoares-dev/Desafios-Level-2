function Reverter(str) {
  return str.split('').reverse().join('');
}

function reverseString() {
  var inputString = document.getElementById("input_string").value;
  var outputString = Reverter(inputString);
  document.getElementById("output").innerHTML = outputString;
}