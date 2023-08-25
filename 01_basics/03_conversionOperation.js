// let score = "21";
// let score = "21a";
// let score = null;
let score = undefined

console.log(typeof(score));

let valInNum = Number(score)
console.log(valInNum)
console.log(typeof valInNum);

//String to number
//"33" - 33
//"33a", null, undefined - NaN - type is number, number, number
//true - 1, false - 0


//values to boolean - Boolean(score)
// 0 - false else true
// "" - false else true

//String(score) - string


//************operations***********/

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let s1 = "hi"
let s2 = " g"
console.log(s1+s2);

console.log("1" + 2 + 3);//123
console.log(1 + "2" + 3);//123
console.log(1 + 2 + "3");//33

console.log(+true); // 1
console.log(+""); // 0

let count = 1;

console.log(count++);
console.log(++count);