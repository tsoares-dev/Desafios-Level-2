function QuestionsMarks(string) {
      var num = [];
      var arrStr = string;
      var numIndex = [];
  
      var vFinal = false;
      for (i=0; i<arrStr.length; i++) {
          if (parseInt(arrStr[i], 10)) {
              num.push(arrStr[i]);
              numIndex.push({
              number: parseInt(arrStr[i], 10),
              index: i,
          });
          }
      }
      for (var a = 0; a < numIndex.length - 1; a++) {
          if (parseInt(numIndex[a].number, 10) + parseInt(numIndex[a + 1].number, 10) === 10){
              vFinal = true;
          var subStr = arrStr.substring(numIndex[a].index + 1, numIndex[a + 1].index); 
          subStr = subStr.replace(/[a-zA-Z]/g, '');
          if (!subStr.includes('???')) {
              vFinal = false;
              return false;
          }
          }
      }
      return vFinal;
}
var input = "acc?7??sss?3rr1??????5";
var result = QuestionsMarks(input);
document.write("Entrada: " + input + "<br>");
document.write("Saída: " + result);
// alert("Entrada: " + input + "<br>");
// alert("Saída: " + result);