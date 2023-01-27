// alert("teste")
function MinWindowSubstring(strArr){
  let str = strArr[0];
  let fatia = strArr[1].split('');

  for(let i = fatia.length, len = str.length ; i <= len ; i++){
    for(j = 0; j <= len -i;  j++){
      let mySlice = str.substr(j,i);
      if(localizar(mySlice)){
        return mySlice;
      }
    }
  }
  return 'Não encontrado na string'

  function localizar(str){
    let arr = str.split('')
    for(let i = 0, len = fatia.length; i < len; i++){
      let local = arr.findIndex(val => {
        return val === fatia[i]
      })
      if(local === -1){
        return false
      }else{
        arr.splice(local,1);
      }
    }
    return true
  }
}
alert(MinWindowSubstring(["aaaaaaabaaddae", "aed"]))