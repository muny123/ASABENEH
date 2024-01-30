// Exercise: Level 1
// QUES 1
const array = [];
// QUES 2
const family = ["Aisha", "Rahmah", "Abdurrahman", "Munira", "Ibraheem"];
// QUES 3
console.log(family.length);
// QUES 4
let firstArr = family[0]
console.log(firstArr);
let middArr =  family[Math.round((family.length - 1) / 2)];
console.log(middArr);
let lastArr = family.length -1;
console.log(family[lastArr]);
// QUES 5
const mixDatatypes =[1, 2, "Ameena", "Maryam", true, false, [1,2,"three",false]];
// QUES 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
// QUES 7
console.log(itCompanies);
// QUES 8
console.log(itCompanies.length);
// QUES 9 firstcompany
console.log(itCompanies[0]);
let middleCompany =  itCompanies[Math.round((itCompanies.length - 1) / 2)];
console.log(middleCompany) //middle company
let lastCompany = family.length -1;
console.log(itCompanies[lastCompany]); //last Company
// QUES 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);


// QUES 11
let index1 = itCompanies[0].toUpperCase();
let index2 = itCompanies[1].toUpperCase();
let index3 = itCompanies[2].toUpperCase();
let index4 = itCompanies[3].toUpperCase();
let index5 = itCompanies[4].toUpperCase();
let index6 = itCompanies[5].toUpperCase();
console.log(index1,index2,index3,index4,index5,index6);
// QUES 12
console.log(itCompanies.join(","));
// QUES 13
let indexx = itCompanies.indexOf('Google')
 if(indexx === -1){
    console.log("company not exist");
 }else{
  console.log("company does exist");
 }
 // QUES 15
 console.log(itCompanies.sort());
 // QUES 16
 console.log(itCompanies.reverse());
 // QUES 17
 console.log(itCompanies.slice(0, 3));
 // QUES 18
 console.log(itCompanies.slice(4,7));
 // QUES 19
 let middCompany =  itCompanies[Math.round((itCompanies.length - 1) / 2)];
 console.log(middCompany);
 // QUES 20
 console.log(itCompanies.shift());
//   QUES 21

console.log(itCompanies.splice(middCompany));
// Qust22
console.log(itCompanies.pop());
//  Quest23
console.log(itCompanies.splice());


// Exercise Level 2
// Ques 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regex =/,./g
let word = text.replace(regex, " ")
let wordLenght = word.split(" ");
console.log(word.match());
console.log(word.split(" " ,));
console.log(wordLenght.length);

//Quest 3
//Add meat in beginning
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart);
//Add sugar at the end
shoppingCart.push("sugar")
console.log(shoppingCart);
//Remove honey
shoppingCart.splice(shoppingCart.indexOf("Honey"))
console.log(shoppingCart);
//modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
console.log(shoppingCart);


  
//Quest 4 and 6 are both in there seperate files
//Quest 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
// let minAge = Math.min(...ages);
// let yongest = ages.filter(item => item == min)
// console.log(yongest);
let max = Math.max(...ages);
let oldest = ages.filter(item => item == max)
console.log(oldest);







 
