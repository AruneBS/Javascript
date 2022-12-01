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

//5 uzduotis

const skaicius1 = rand (0, 2);
const skaicius2 = rand (0, 2);
const skaicius3 = rand (0, 2);
const skaicius4 = rand (0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if(skaicius1 === 0)
    nuliai++;

if(skaicius2 === 0)
    nuliai++;


if(skaicius3 === 0)
    nuliai++;

if(skaicius4 === 0)
    nuliai++;

if(skaicius1 === 1)
    vienetai++;

if(skaicius2 === 1)
    vienetai++;


if(skaicius3 === 1)
    vienetai++;

if(skaicius4 === 1)
    vienetai++;

if(skaicius1 === 2)
    dvejetai++;

if(skaicius2 === 2)
    dvejetai++;


if(skaicius3 === 2)
    dvejetai++;

if(skaicius4 === 2)
    dvejetai++;


console.log('Gauti skaiciai:' , skaicius1, skaicius2, skaicius3, skaicius4);
console.log('Gauti rezultatai:' , nuliai, vienetai, dvejetai);
