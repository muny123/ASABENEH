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
//   let base = prompt("enter base in number");
//   let height = prompt('enter height in cm')  
//   let areaOfTriangle = 0.5 *base * height; 
//   alert(`The area of the triangle is ${areaOfTriangle}`);     
  //que 2
//   let sideA = prompt("Enter the side A in Number")
//   let sideB = prompt("Enter the side B in Number")
//   let sideC = prompt("Enter the side B in Number")
//   let perimeter = Number(sideA)+ Number(sideB)+ Number(sideC);
//   alert(`The perimeter of the triangle is ${perimeter}`)

  //que3
//   let length = prompt("length")
//   let width = prompt("width")
//   let areaOfRectange = Number(length) * Number(width);
//   let perimeterOfRectangle = 2 * (Number(length) + Number(width))
//   alert(`the areaOfRectange is ${areaOfRectange}`)
//   alert(` the perimeterOfRectangle is ${perimeterOfRectangle}`)

  // ques 4
  const pie = 3.142;
  let radius = 5;
  let circumferenceOfACircle = 2 * pie * radius;
  console.log(circumferenceOfACircle.toFixed(2));

//   ques 6
let points =[2, 2, 6, 10];
let slope = (points[3] - points[1]) /  (points[2] - points[1])
console.log(slope);

// ques 8 
// let xy =prompt("Enter your x ");
// let ans = xy**2 + 6*xy + 9;
// console.log(ans);

// que 9
//  let hours = prompt("hours in Number")
//  let payPerHr = prompt("pay per hour")
//  let earning = hours * payPerHr;
//   alert(`Your weekly earning is ${earning}`)
 
//ques 10
// let name = prompt("Enter your name");
// if(name.length > 7 ){
//     alert(`your name is long`)
// }else {
//     alert(`your name is short`)
// }

//ques 11
let firsName = 'Munira'
let lasName = 'Badru'
 if(firsName.length >= lasName.length){
    console.log(`Your first name, ${firsName} is longer than your family name, ${lasName}`);
 }else{
    console.log(`Your first name, ${firsName} is shorter than your family name, ${lasName}`);

 }
 //ques 12
 let myAge = 250
 let yourAge = 25
 let actualAge = myAge - yourAge;
 console.log(`I am ${actualAge} years older than you`);

//  ques 14
// let  agee = prompt("Enter your age in years")
// const seconds = agee * 60 * 60 * 24 * 365 ;
// alert(`You lived ${seconds} seconds`);

// ques 15
let dateNow = new Date();
year = dateNow.getFullYear();
month = dateNow.getMonth();
date = dateNow.getDate();
hour = dateNow.getHours();
minutes = dateNow.getMinutes();

console.log(`${year}-${month+1}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month+1}-${year} ${hour}:${minutes}`);
console.log(`${date}/${month+1}/${date} ${hour}:${minutes}`);

// Exercises: Level 3
//YY-MM-DD HH:mm
// if(dateNow.getHours() <= 9){
//   console.log(`0${dateNow.getHours()}`);
// }
const dateformatYear = `${dateNow.getFullYear()}-0${dateNow.getMonth()+1}-${dateNow.getDate()} 0${dateNow.getHours()}:${dateNow.getMinutes()}`;
console.log(dateformatYear);





  


















