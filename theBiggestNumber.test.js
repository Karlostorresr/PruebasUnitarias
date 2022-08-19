//importar la funcion a testear(objeto)

const functions = require ('./theBiggestNumber');

//Empieza el testing

test ('el numero mayor no sea menor que algun otro', ()=>{
    expect (functions.getBiggestNumber([52,37,501,15,41])).toBe(501);

})


