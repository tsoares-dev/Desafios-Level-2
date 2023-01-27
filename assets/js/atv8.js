function LongestWord (sen) {
  const words = sen.split(" ")
  var longestWord = ""
  words.forEach((palavras, index) => {
  if (index < palavras.length) {
      var primeiraPalavra = palavras[index]      
      var segundaPalavra = palavras[index++]

      if (longestWord == null){
          if (primeiraPalavra.length > segundaPalavra.length){
              longestWord = primeiraPalavra
          }else{
              longestWord = segundaPalavra
          }
      }else{
          if(longestWord.length < primeiraPalavra.length){
          longestWord = primeiraPalavra
          }
          else if (longestWord.length < segundaPalavra.length){
          longestWord = segundaPalavra
          }
      }
  }
  return longestWord
})
console.log(`A maior palavra é ${longestWord}`)
}

var frase = "lembrar que Importante é um teste"
  LongestWord(frase)
var palavra = "Hello world123 567 77566aaa"
var big = ""

palavra.split(" ").forEach(word => {
if (word.trim().length > big.length) {
  big = word.trim()
  }
})
// console.log(big)
alert(big)
