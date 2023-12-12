// masala-1


// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let userInput = prompt("Iltimos, bir son kiriting:");
// let userNumber = parseInt(userInput);

// if (isNaN(userNumber)) {
//     console.log("Noto'g'ri son kiritdingiz. Iltimos, raqam kiriting.");
// } else {
//     if (isPrime(userNumber)) {
//         console.log(userNumber + " tub son");
//     } else {
//         console.log(userNumber + " tub son emas");
//     }
// }

// masala-2

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let userInput = prompt("Iltimos, bir son kiriting:");
// let userNumber = parseInt(userInput);

// if (isNaN(userNumber)) {
//     console.log("Noto'g'ri son kiritdingiz. Iltimos, raqam kiriting.");
// } else {
//     let primes = [];

//     for (let i = 2; i <= userNumber; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     console.log("Siz kiritgan son gacha " + primes.length + " ta tub son bor:");
//     console.log(primes);
// }



// masala-3

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let userInput = prompt("Iltimos, bir son kiriting:");
// let userNumber = parseInt(userInput);

// if (isNaN(userNumber)) {
//     console.log("Noto'g'ri son kiritdingiz. Iltimos, raqam kiriting.");
// } else {
//     let primesAfterInput = [];
//     let count = 0;
//     let i = userNumber + 1;

//     while (count < 5) {
//         if (isPrime(i)) {
//             primesAfterInput.push(i);
//             count++;
//         }
//         i++;
//     }

//     console.log("Siz kiritgan sonidan keyingi 5 ta tub son:");
//     console.log(primesAfterInput);
// }
