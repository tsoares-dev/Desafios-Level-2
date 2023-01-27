const findIntersection = (strArr) => {
      let newArr = []
      let elem1 = strArr[0].split(',')
      let elem2 = strArr[1].split(',')
  
      for(let i=0; i<elem1.length; i++){
          if (elem2.includes(elem1[i])){
              newArr.push(elem1[i])
          }
      }
      if (newArr.length === 0) {
          return false
      }else{
          return newArr.toLocaleString()
      }
  }
  alert(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']))