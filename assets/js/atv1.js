// function combinacoes(){
//   var result1 = document.getElementById('result1')
//   var num = parseInt(document.getElementById('inp1form1').value)
//   function calcularPossibiidades(open,closed){
//       if(open === 0 && closed === 0)
//           return 1       
//       var res = 0;
//       if(open>0)
//           res +=calcularPossibiidades(open-1,closed);
//       if(closed>open)
//       res+= calcularPossibiidades(open,closed-1)
//       return res
      
//   }
//   result1.innerHTML = calcularPossibiidades(num,num)
//   alert(combinacoes(3))
// }

const abertoO = (expressao) => {
    let aberto = 0
    let fechado = 0
    for (let i = 0; i < expressao.length; i++) {
        if (expressao[i] === '(') aberto++
        else if (expressao[i] === ')') fechado++
    }
    return (aberto - fechado) > 0
}    
const gerarCombinancoes = (combinac) => {
    let novasCombinacoes = new Set([])
    for (let combination of combinac) {
        for (let i = 0; i <= combination.length; i++) {
                    
            let novaCombinacao = combination.slice(0, i) + '(' + combination.slice(i);
            for (let j = i + 1; j < novaCombinacao.length; j++) {
                if (abertoO(novaCombinacao.slice(0, j))) 
                    novasCombinacoes.add(novaCombinacao.slice(0, j) + ')' + novaCombinacao.slice(j))
            }
        }
    }
    return Array.from(novasCombinacoes)
}
const combinacoes = (num) => { 
    if (num === 0) return 1
            
    let combina = ['()']
    for (let i = 1; i < num; i++) {
        combina = gerarCombinancoes(combina)
    }
    return combina.length
}
alert("Com a entrada 3, as possíveis combinações são: " + combinacoes(3))