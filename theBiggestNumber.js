/*Crear una funcion que reciba una lista de numeros como parametro y regrese el numero mas grande dentro del arreglo.
Crea pruebas unitarias para esta funcion (validar que regrese el numero mas grande, validar el tipo de valor regresado cuando el la lista esta vacia).*/

const functions ={
    getBiggestNumber
}

function getBiggestNumber(numberList){
    
    theBiggestnumber=null;

    numberList.forEach((element) => {
        if(theBiggestnumber === null) {
            theBiggestnumber = element;
        }
        else {
            if (theBiggestnumber < element){
                theBiggestnumber=element;
            }
        }
        
    });
    console.log(theBiggestnumber);
    return theBiggestnumber;
    
}
/*
listLength= prompt ("How many numbers do you have ?");

userNumberList=[];

 
for (let i=0; i <=listLength-1; i++){
    newNumber=prompt ("introduzca un numero: ");
    userNumberList.push(parseInt(newNumber));
}
console.log(userNumberList);






console.log("El numero mas grande es: " + getBiggestNumber(userNumberList));
*/

module.exports= functions;