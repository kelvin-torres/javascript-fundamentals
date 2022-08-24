console.log('*********CHALLANGE BELLOW*********')


const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

//Coding Challenge #3

//const scoreDolphins = (96 + 108 + 89) / 3
//const scoreKoalas = (88 + 91 + 110) / 3

//data2
//const scoreDolphins = (97 + 112 + 101) / 3
//const scoreKoalas = (109 + 95 + 123) / 3

//data3
//const scoreDolphins = (97 + 112 + 101) / 3
//const scoreKoalas = (109 + 95 + 106) / 3

//data4
const scoreDolphins = (97 + 112 + 101) / 3
const scoreKoalas = (97 + 112 + 101) / 3


console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphin won the trophy🏆 with ${scoreDolphins} points average`)
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas won the trophy🏆 with ${scoreKoalas} points average`)
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both won the trophy🏆");
} else {
    console.log('No one wins the trophy 😭!')
}

//Coding Challenge #4

const bill = 100;
const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.20);
console.log(bill + tip);

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${bill + tip} 💸 `);

