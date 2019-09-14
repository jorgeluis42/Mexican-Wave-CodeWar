function wave(mexico){
    let result = []
   for (let i=0; i < mexico.length; i++) {
     if (/[a-z]/.test(mexico[i])) {
       result.push(mexico.slice(0,i) + mexico[i].toUpperCase() + mexico.slice(i+1, mexico.length))
     }
   }  
   console.log(result)
   return result  
 }