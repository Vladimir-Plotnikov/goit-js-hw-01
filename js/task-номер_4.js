
let credits = 23580
const pricePerDroid = 3000
let message;

let howManyDroids = prompt('Сколько дроидов Вам нужно в рабство ?')
let totalPrice = (pricePerDroid * howManyDroids)
let creditsLeft = (credits - totalPrice)

if (howManyDroids === null) {
    message = `Отменено пользователем!`
    console.log(message);
}
else if (totalPrice <= credits) {
message = `Вы купили ${howManyDroids} дроидов, на счету осталось ${creditsLeft} кредитов.`
console.log(message)
}
else if (totalPrice > credits) {
message = `Недостаточно средств на счету!`
console.log(message)
}