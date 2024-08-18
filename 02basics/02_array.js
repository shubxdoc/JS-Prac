const marvel_heros = ["thor", "hulk", "ironman"];
const dc_heros = ["batman", "superman", "aquaman"];

// marvel_heros.push(dc_heros); // [ 'thor', 'hulk', 'ironman', [ 'batman', 'superman', 'aquaman' ] ]
// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

// const all_heros = [...dc_heros, ...marvel_heros]; //best way
// console.log(all_heros);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [4, 5]]; //not used much

// const anotherArr2 = anotherArr.flat(Infinity);
// console.log(anotherArr2);

// console.log(Array.isArray("Abc")); // false
// console.log(Array.from("Abc")); // converted this to array [ 'A', 'b', 'c' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
