// Functions Exercises
// Print your answers to the console.

// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// sumIntFrom1ToN(4) ➞ 10
// sumIntFrom1ToN(13) ➞ 91
// sumIntFrom1ToN(600) ➞ 180300
console.log("-------")
const sum_of_integer = (a) => {
    let sum = 0
    for (let i = 0; i < a; i++) {
        sum = sum + i + 1
    }
    return sum
}
console.log(sum_of_integer(600))


// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0
console.log("-------")
function sum_of_cubes(a, b, c) {
    if (a == null) {
        a = 0
    }
    if (b == null) {
        b = 0
    }
    if (c == null) {
        c = 0
    }


    return ((a ** 3) + (b ** 3) + (c ** 3))
}

console.log(sum_of_cubes())

// 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// isStrStartOfWord("bu", "button") ➞ true
// isStrStartOfWord("tri", "triplet") ➞ true
// isStrStartOfWord("beau", "pastry") ➞ false
console.log("-------")
function isStrStartOfWord(string_start, string_full) {
    let str = String(string_full)
    if (str.indexOf(string_start) == 0) {
        return true
    } else {
        return false
    }
}
console.log(isStrStartOfWord("bu", "button"))
console.log(isStrStartOfWord("tri", "triplet"))
console.log(isStrStartOfWord("beau", "pastry"))


// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
console.log("-----")

function less_or_equal0(a) {
    if (a <= 0) {
        return true
    } else {
        return false
    }
}

console.log(less_or_equal0(2))
console.log(less_or_equal0(-2))


// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
console.log("-------")
function count_letters(fullstring, letter) {
    let number_of_letters = fullstring.match(new RegExp(letter, "ig"))
    if (number_of_letters == null) {
        return ("no match")
    } else {
        return number_of_letters.length
    }
}
console.log(count_letters("this is a string", "i"))


// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

// Examples:

// calcBaseToExponent(5, 5) ➞ 3125
// calcBaseToExponent(10, 10) ➞ 10000000000
// calcBaseToExponent(3, 3) ➞ 27
console.log("-------")
function calc_exponent(a, b) {
    return a ** b
}
console.log(calc_exponent(5, 5))
// 7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggo is 28 years old in dog years!"
console.log("-------")
function dogyears(a) {
    return a * 7
}
console.log("Your dog is ", dogyears(4), "yars old in human years")
// 8. A Lifetime Supply... You just won a lifetime supply of your favourite snack!
//  The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
//   Create a function to help you calculate that amount for yourself to make sure you get the right amount.
//    The function should accept two arguments: age and amount per day.
//     The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

// Bonus:

// Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).

// Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

// calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 14,406 units, until you are a ripe old age of 65. Happy snacking!"

console.log("-------")
function lifetime_supply(age, per_day, max_age) {
    let totalyears = max_age - age
    if (totalyears <= 0) {
        return "You are propably dead"
    } else {
        return String("you get " + (totalyears * 365.25 * per_day) + " cookies till you dead at " + max_age)
    }
}

console.log(lifetime_supply(32, 0.58, 65))
// 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:

// isWaldoHere("is there a wal here?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("Wait, don't you mean Wally?") ➞ false
// isWaldoHere("waldo is here") ➞ true


console.log("-------")


function where_is_waldo(waldo) {
    let number_of_waldos = waldo.match(new RegExp("waldo", "ig"))
    if (number_of_waldos == null) {
        return ("no waldos")
    } else {
        return number_of_waldos.length
    }
}

console.log(where_is_waldo("I found you Waldo Waldo!"), "have been found here")

// 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:

// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// isEqualSlices(8, 3, 2) ➞ true

// isEqualSlices(8, 3, 3) ➞ false

// isEqualSlices(24, 12, 2) ➞ true
console.log("-------")

function split_the_pie(slices, recipients, spp) {
    let given_slices = recipients * spp
    return given_slices <= slices
}
console.log(split_the_pie(11, 5, 3))
console.log(split_the_pie(8, 3, 2))
console.log(split_the_pie(8, 3, 3))
console.log(split_the_pie(24, 12, 2))


// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// isEqualNumXandO("ooxx") ➞ true
// isEqualNumXandO("xooxx") ➞ false
// isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandO("zzoo") ➞ false
console.log("-------")

function same_x_o(stringy) {
    let totalx = stringy.match(new RegExp("x", "ig"))
    let totalo = stringy.match(new RegExp("o", "ig"))
    if (!totalx) {
        totalx = 0
    }
    if (!totalo) {
        totalo = 0
    }
    return totalx.length === totalo.length
}
console.log(same_x_o("ooxx"))
console.log(same_x_o("xooxx"))
console.log(same_x_o("ooxXm"))
console.log(same_x_o("zpzpzpp"))
console.log(same_x_o("zzoo"))


// 12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. 
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
//  The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

console.log("------")

function is_prime(a) {
    for (i = 2; i < a; i++){
        if (a % i === 0) return false
    } 
    return true;
}
console.log(is_prime(4))

// 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax),
//  so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// The string must contain exactly one "@" character
// The string must contain at least one "." character
// The "." and the "@" must be in the appropriate places:
// neither "." nor "@" can be the last character
// "." can neither be directly before, nor directly after, "@"
// there cannot be consecutive "." characters
// "@" must have at least one character in front of it
// Examples:

// "j@example.com" is valid while "@example.com" is invalid
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid
// Good Luck & Enjoy :)

function email_check(email){
    let mail_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.match(mail_format)){
        return true
    }
    else{
        return false
    }

}
console.log("-------")
console.log(email_check("j@example.com"))
console.log(email_check("@example.com"))
console.log(email_check("john.smith@com"))
console.log(email_check("john.smith@email.com"))
console.log(email_check("john..smith@email.com"))
console.log(email_check("john.@email.com"))
console.log(email_check("john@.email.com"))