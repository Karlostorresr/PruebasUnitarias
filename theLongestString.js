/*Crear una funcion que reciba una lista de cadenas como parametros y regresa la cadena con mayor longitud.
Crea pruebas unitarias para esta funcion (validar que regrese la cadena mas extensa, que los valores en el arreglo sean siempre cadenas, etc)*/

string1= "Hi, I think I am the longest string"
string2= "Hi I am a string"
string3= "This program was made by Karlos Torres"
string4= "I will be fullstack developer"

testStringArray=[string1, string2, string3, string4];

const functions ={
    getTheLongestString
}

function getTheLongestString(stringArray){

    theLongestOne=null;

    stringArray.forEach((string) => {
        
        if(theLongestOne===null){
            theLongestOne=string;
        }
        else{
            if (theLongestOne.length<string.length){
                theLongestOne=string;
            }
        }
    });

    console.log(theLongestOne);
    return(theLongestOne);
    
}
getTheLongestString(testStringArray);

module.exports=functions;


