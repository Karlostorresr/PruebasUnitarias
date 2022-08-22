const functions = require ('./theLongestString.js');

test ('return the longest string', ()=>{
    expect (functions.getTheLongestString(["hola","Generation","12565564654", "Antonio Karlos"])).toBe("Antonio Karlos");
});
