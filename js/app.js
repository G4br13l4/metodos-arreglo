//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
	 for(var i = 0; i < arreglo.length; i++){
        callback(arreglo[i]);
    }
}

	miForEach([1,2,3], function(elemento){
        console.log(elemento);
    });

  
  
//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){
var newArray= [];
    for(var i = 0; i < arreglo.length; i++){
        newArray.push(callback(arreglo[i]));
     }
    return newArray;
}

    miMap([1,2,3], function(elemento){
       console.log(elemento + "c");
    });

//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, callback){
    var newArray = [];
    for(i=0;i<arreglo.length;i++){
      if(callback(arreglo[i])){
        newArray.push(arreglo[i]);
      }
    }
    return newArray;
}

  miFilter([1,2,10,4,5,6],function(elemento){
    console.log(elemento <= 7); 
  });

// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
  function miReduce(arreglo, callback, initialize){
        if (initialize){
            var acumulator = initialize;  
        } else {
        var acumulator = null; 
        }
        for (var i = 0; i < arreglo.length; i++){
            acumulator = callback(arreglo[i], acumulator);
          }
          return acumulator;
}

  miReduce([1,2,3], function(elemento, acumulator){
    return (acumulator + elemento);
  });
  

