    function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
console.log('Veikia external javascriptas failas');


const x = 10;

console.log('Pirmoji gauta reiksme: ' + x);

// x = 15;

// console.log(x)

let y=15

y=20


console.log('Antroji gauta reiksme:',y);

y += 2;

console.log('Pliuso operatrorius:',y)


y-= 10

console.log('Minus operatorius:',y);

y *= 3

console.log('Daugybos operatorius:', y);

y /= 2

console.log('Dalybos operatorius:', y);

y++;
console.log('Inkrementinis operatorius:', y);

y--;
console.log('Dekrementinis operatorius:', y)


y= false;

// if(y) {
//     console.log('Kintamasis egzistuoja')

// } else{
//     console.log('Kintamasis neegzistuoja')
// }

let z=false

console.log(typeof z);

if(!z){
console.log('Z turi neigiama reiksme');
}
let w= 40;

if(w != 40) {
    console.log('Kintamasis w nera lygus 40');
} else {
    console.log('Kintamasis yra lygus 40');
}

// let pirmasSkaicius = 12

// let antrasSkaicius= 13

// if(pirmasSkaicius > antrasSkaicius) {
//     console.log('Pirmas skaicius yra didesnis');
// } else if(pirmasSkaicius === antrasSkaicius){
//     console.log('Skaiciai yra lygus');
// } 

// else{
//     console.log('Antras skaicius yra didesnis');
// }

// let pirmasSkaicius = 11
// let antrasSkaicius = 12

// if(pirmasSkaicius>= antrasSkaicius){
//     console.log('Pirmas skaicius yra didesnis arba lygus antram skaiciui');
// } else{
//     console.log('Antras skaicius yra didesnis uz pirma skaiciu.');

// }

const stringas = 'Lorem ipsum dolor sit amet';

console.log(stringas);

console.log('Ketvirtoji stringo raide:', stringas[4]);

console.log('Stringo ilgis yra:', stringas.length);

let modifikuotasStringas = 'blablablabla' + stringas + 'lalalalala';

console.log(modifikuotasStringas);

console.log(modifikuotasStringas.replaceAll('ipsum', 'lalala'));
console.log(modifikuotasStringas.replaceAll('sit', 'blablabla'));

const randomSkaicius = rand(5, 150);

console.log('Atsitiktinis skaicius:', randomSkaicius);