function combinacoes(){
  var result1 = document.getElementById('result1')
  var num = parseInt(document.getElementById('inp1form1').value)
  function calcularPossibiidades(open,closed){
      if(open === 0 && closed === 0)
          return 1       
      var res = 0;
      if(open>0)
          res +=calcularPossibiidades(open-1,closed);
      if(closed>open)
      res+= calcularPossibiidades(open,closed-1)
      return res
      
  }
  result1.innerHTML = calcularPossibiidades(num,num)
  alert(calcularPossibiidades)
}