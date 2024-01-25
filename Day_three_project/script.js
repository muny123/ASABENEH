           //Exercises: Level 1
           console.log("hello world");
      
// 1
let firstName = "Munira"
let lastName = "Badru"
let country = "Nigeria"
let city ="Ilorin"
let age = 20
let isMarried = true
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

//2
let a = "10"
let b = 10
console.log(typeof a === typeof b);
//3
let parsein = parseInt('9.8')
let num =10
console.log(parsein === num);

//4
let truth = 10>5;
let falsy = 10<5;
console.log(truth + " " + falsy) ;

//5
let x= 4>3; y= 4>=3; z=4<3; v=4<=3; h = 4==4; j= 4 !=4; g= 4!==4; k=4!='4'; 
l=4=='4';m = 4===4;
let pyth ="python";
let jarg ="jargon";
console.log(x, y, z, v, h, j, g, k, l, m, );
console.log(pyth.length);
console.log(jarg.length);
console.log(pyth === jarg);

//6
let va =4 > 3 && 10 < 12;
let val =4 > 3 && 10 > 12;
let vaa =4 > 3 || 10 < 12;
let vaal = 4 > 3 || 10 > 12;
let vall= !(4 > 3);
let ve= !(4 < 3);
let ver= !(false);
let very= !(4 > 3 && 10 < 12);
let verr = !(4 > 3 && 10 > 12);
let veryy =!(4 === '4');
console.log(va);
console.log(val);
console.log(vaa);
console.log(vaal);
console.log(ve);
console.log(ver);
console.log(very);
console.log(verr);
console.log(veryy);
console.log(pyth.includes(!"on"));
console.log(jarg.includes(!"on"));

//7
let year = new Date();
console.log(`The year today is ${year.getFullYear()}`);
console.log(`The month today is ${year.getMonth()}`);
console.log(`The day today is ${year.getDay()}`);
console.log(`The date today is ${year.getDate()}`);
console.log(`The hour now  is ${year.getHours()}`);
console.log(`The minutes now  is ${year.getMinutes()}`);
console.log(`The minutes now  is ${year.getTime()}`);
                 //Exercises: Level 2
  //1
  let base = prompt("enter base in number");
  let height = prompt('enter height in cm')  
  let areaOfTriangle = 0.5 *base * height; 
  alert(areaOfTriangle);     
  //que 2
     

















