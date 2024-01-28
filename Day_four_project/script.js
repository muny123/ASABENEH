// Exercises: Level 1
// Ques 1
 let age = prompt("Enter your age:")  
 if(age>= 18){
    console.log("You are old enough to drive");
 }  
 else{
   age = Number(18 - age);
   console.log(`You are left with ${age} years to drive`);
 }

// Quest 2
let agee;
let myAge = prompt("My age is:");
let yourAge= prompt("Entery your age :")
if(myAge > yourAge){
   agee = Number(myAge - yourAge);
    console.log(`I'm ${agee} years older than you`);
}else{
    agee = Number(yourAge-myAge)
    console.log(`You are ${agee} years older than me`);
}

//Quest 3
let a = 4
let b = 3
if (a>b) {
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${a} is less than {$b}`);
}
//using ternary operator
a > b      ?
console.log(`${a} is greater than ${b}`):
console.log(`${a} is less than {$b}`);


//QUEST 4
let number = prompt("Enter a number")
if(number%2 === 0){
    console.log(`${number} is an even number`);
}
else{
    console.log(`${number} is an odd number`);

}









// Exercises: Level 2
//quest 1
let score = prompt("Enter your score")
if(score >=80 && score <= 100){
    console.log("Your grade is A");
}else if(score >=70 && score <=89){
    console.log("Your grade is B");
  }
  else if(score >=60 && score <=69){
    console.log("Your grade is C");
  }
  else if(score >=50 && score <=59){
    console.log("Your grade is D");
  }
  else if(score >=0 && score <=49){
    console.log("Your grade is F");
  }
else{

    console.log("You do not have a grade");
}
// Using switch method
// switch (score) {
//     case (score >=80 && score <= 100):
//     console.log("Your grade is A")
//         break
//     case (score >=70 && score <= 89):
//     console.log("Your grade is B")
//         break  
//     case score >=60 && score <= 69:
//     console.log("Your grade is C")
//         break
//    case score >=50 && score <= 59:
//     console.log("Your grade is D")
//         break
//     case score >=0 && score <= 49:
//     console.log("Your grade is F")
//        break
//     default:
//     console.log("You do not have a grade");
//         break;
// }

// //quest 2
let month = prompt("Enter the the month today?")
month = month.toLowerCase()
if(month == 'September' || month == 'October' || month == 'November') {
    console.log("The season is Autumn");

} else if(month == 'December' || month == 'January' || month == 'February'){
    console.log("The season is Winter");

}
else if(month == 'March' || month == 'April' || month == 'May'){
    console.log("The season is Spring");

}
else if(month == 'June' || month == 'July' || month == 'August'){
    console.log("The season is Summerr");

}
else{
    console.log("It's not a Month");
}

// quest 3

let day = prompt("What is the day today")
day = day.toLowerCase();

if(day == "satuday" || day == "sunday"){
    console.log("Today is weekend");
}else{
    console.log("Toady is a working day");
}

// Exercises: Level 3
