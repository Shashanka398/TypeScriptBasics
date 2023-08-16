// Import stylesheets
import './style.css';
const firstCode = 'hi';
let p = 23;
//1.0 Function declaration in TS
const newDiv = document.getElementById('app');
function callable(name: String, age: Number) {
  newDiv.innerHTML = `${name} ${age} `;
}
callable('Shashank', 5);

//2.0Annonyms Functions in TS

//2.1 Use of arrow -> function
const names = ['shasahank', 'ganesh'];
names.forEach((s: string) => {
  console.log(s.toLocaleUpperCase());
});
//2.2Use of normal function Note: in normal function we mentioned type but here we did not .
names.forEach(function (s) {
  console.log(s.toLocaleUpperCase());
});

//3.0
function printLn(id: Number | string) {
  console.log(id);
}

printLn('123');
printLn(123);

//4.0  Interface vs Type
//In interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: 'Dog',
  honey: true,
};
console.log(bear.name);
console.log(bear.honey);
//In type

type Person = {
  names: string;
};
type bio = Person & {
  age: Number;
};

const person1: bio = {
  names: 'Shashank',
  age: 58,
};
console.log(person1.names);
console.log(person1.age);


//5.0 Narrowing 

const doSomething(caseJudgement: Number | string | boolean)=>{
  //If number do something.
  //If string do something.
  //Bool something else
}
