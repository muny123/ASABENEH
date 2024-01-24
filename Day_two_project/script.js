// console.log("hello world");
//  let word = 'javascript';
//  word[0] = 'y';
//  console.log(word);

//  let nums = [1, 2, 3]
// nums[0] = 10

// console.log(nums)



let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let fullName = firstName + space + lastName; 
console.log(fullName);
 

//long literal string//
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

//Escape Sequences in Strings//
/* \n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") */

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

       // template literal string//
       console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let c = 4
let d = 5
console.log(`${c} is greater than ${d}: ${c > d}`)


                        //Assignments
let result = ' Love is the best thing in this world. Some found their love and some are still looking for\ their love.'               
    let count = (result.match(/love/gi)).length;
     console.log(count);

 // Second Assignment
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; && mo@re rewarding than educa@ting &and& @emp%o@weri@ng peo@ple. ;I find tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /[!@&$:#%]/g
console.log(sentence.replace(regEx, ''));  

// forth assignment
// function getSum(a,b) {
//     return a+b;
    
//   }

// Assignment 4
  
const earn = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';

const arr  = earn.match(/\d+/g);
console.log(arr);

const totalAnnualIncome = (+arr[0] + +arr[2]) *12 + +arr[1];
console.log(totalAnnualIncome);

 